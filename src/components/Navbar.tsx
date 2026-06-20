import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
// eslint-disable-next-line react-refresh/only-export-components
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const clickHandlers: { element: HTMLAnchorElement; handler: (e: MouseEvent) => void }[] = [];
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: MouseEvent) => {
        setMenuActive(false);
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elemTarget = e.currentTarget as HTMLAnchorElement;
          const section = elemTarget.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      };
      element.addEventListener("click", handler);
      clickHandlers.push({ element, handler });
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SS
        </a>
        <a
          href="mailto:theshivamshukla.4uu@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          theshivamshukla.4uu@gmail.com
        </a>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
        <div className={`hamburger-menu ${menuActive ? "active" : ""}`} onClick={() => setMenuActive(!menuActive)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className="landing-circle1 blob"></div>
      <div className="landing-circle2 blob"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
