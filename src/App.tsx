import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after all components mount
    ScrollTrigger.refresh();

    // Refresh ScrollTrigger after fonts load
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      // Clear scroll memory on unmount
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#0a0e17",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
            zIndex: 999999999,
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid rgba(255, 255, 255, 0.1)",
              borderTopColor: "#5eead4",
              borderRadius: "50%",
              animation: "spinApp 1s linear infinite",
            }}
          ></div>
          <style>{`
            @keyframes spinApp {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      }
    >
      <MainContainer>
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </Suspense>
  );
};

export default App;
