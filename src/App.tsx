import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingSpinner from "./components/LoadingSpinner";

gsap.registerPlugin(ScrollTrigger);

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after fonts load
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      // Correctly kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MainContainer>
        <CharacterModel />
      </MainContainer>
    </Suspense>
  );
};

export default App;
