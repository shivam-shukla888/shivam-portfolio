import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());

  useEffect(() => {
    if (canvasDiv.current) {
      const rect = canvasDiv.current.getBoundingClientRect();
      const container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      const containerElement = canvasDiv.current;
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      if (containerElement) {
        containerElement.appendChild(renderer.domElement);
      }

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: THREE.Object3D | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      let resizeHandler: (() => void) | null = null;
      let hoverCleanup: (() => void) | null = null;

      loadCharacter().then((gltf) => {
        if (gltf) {
          const animations = setAnimations(gltf);
          if (hoverDivRef.current) {
            hoverCleanup = animations.hover(gltf, hoverDivRef.current) || null;
          }
          mixer = animations.mixer;
          const character = gltf.scene;
          scene.add(character);
          headBone = character.getObjectByName("spine006") || null;
          screenLight = character.getObjectByName("screenlight") || null;
          
          // Turn on lights and start character intro immediately
          light.turnOnLights();
          animations.startIntro();

          resizeHandler = () => {
            handleResize(renderer, camera, canvasDiv, character);
          };
          window.addEventListener("resize", resizeHandler);
        }
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      let lastMouseMoveTime = 0;
      const onMouseMove = (event: MouseEvent) => {
        const now = performance.now();
        if (now - lastMouseMoveTime < 16.67) return; // ~60fps throttle
        lastMouseMoveTime = now;
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      
      let touchMoveHandler: ((e: TouchEvent) => void) | null = null;
      let activeTouchElement: HTMLElement | null = null;
      let debounce: number | undefined;
      
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        activeTouchElement = element;
        debounce = setTimeout(() => {
          touchMoveHandler = (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }));
          element?.addEventListener("touchmove", touchMoveHandler);
        }, 200);
      };

      const onTouchEnd = () => {
        if (touchMoveHandler && activeTouchElement) {
          activeTouchElement.removeEventListener("touchmove", touchMoveHandler);
          touchMoveHandler = null;
        }
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      let isCanvasVisible = true;
      let animationFrameId: number;

      const animate = () => {
        if (document.hidden || !isCanvasVisible) return;
        
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          const wasVisible = isCanvasVisible;
          isCanvasVisible = entry.isIntersecting;
          if (isCanvasVisible && !wasVisible) {
            animate();
          } else if (!isCanvasVisible && wasVisible) {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
            }
          }
        },
        { threshold: 0 }
      );
      if (containerElement) {
        observer.observe(containerElement);
      }

      document.addEventListener("mousemove", onMouseMove);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }

      animate();
      
      const onVisibilityChange = () => {
        if (!document.hidden && isCanvasVisible) animate();
        else if (document.hidden && animationFrameId) cancelAnimationFrame(animationFrameId);
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      
      return () => {
        clearTimeout(debounce);
        observer.disconnect();
        document.removeEventListener("visibilitychange", onVisibilityChange);
        document.removeEventListener("mousemove", onMouseMove);
        
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        if (resizeHandler) {
          window.removeEventListener("resize", resizeHandler);
        }
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
        if (touchMoveHandler && activeTouchElement) {
          activeTouchElement.removeEventListener("touchmove", touchMoveHandler);
        }
        if (hoverCleanup) {
          hoverCleanup();
        }

        // Traverse and dispose of Three.js objects
        scene.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) {
            const mesh = object as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
        scene.clear();
        renderer.dispose();
        
        if (containerElement && renderer.domElement.parentNode === containerElement) {
          containerElement.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
