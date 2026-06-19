import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Certifications from "./Certifications";
import CurrentFocus from "./CurrentFocus";
import EngineeringJourney from "./EngineeringJourney";
import DeveloperHub from "./DeveloperHub";
import WhyHireMe from "./WhyHireMe";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import setSplitText from "./utils/splitText";
import { initialFX } from "./utils/initialFX";

const TechStack = lazy(() => import("./TechStack"));
const Work = lazy(() => import("./Work"));
const Contact = lazy(() => import("./Contact"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    initialFX();
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <CurrentFocus />
            <EngineeringJourney />
            <WhyHireMe />
            <WhatIDo />
            <Career />
            <Certifications />
            <Suspense fallback={<div className="section-loading">Loading Projects...</div>}>
              <Work />
            </Suspense>
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <DeveloperHub />
            <Suspense fallback={<div className="section-loading">Loading Contact...</div>}>
              <Contact />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
