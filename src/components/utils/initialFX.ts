import SplitText from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingText1 = new SplitText(".landing-headline", {
    type: "chars,lines",
    linesClass: "split-line",
  });
  var landingText2 = new SplitText(".landing-intro h2", {
    type: "chars,lines",
    linesClass: "split-line",
  });
  var landingText3 = new SplitText(".landing-name", {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    [landingText1.chars, landingText2.chars, landingText3.chars],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.015,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".landing-subheadline", ".landing-bio", ".landing-ctas", ".stats-card"],
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      y: 0,
      stagger: 0.1,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
