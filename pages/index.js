import { useEffect } from "react";
import anime from "animejs";
import CoverImage from "../public/CoverDay.svg";
import { Head } from "next/document";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const svg = document.getElementById("coverImage");
      const fadeGroup = svg.getElementById("FadeGroup");
      anime({
        targets: fadeGroup,
        opacity: 0.3,
        easing: "easeInOutSine",
        duration: 3000,
      });
    }, 1000);

    const svg = document.getElementById("coverImage");
    const svgViewBox = svg.viewBox.baseVal;
    console.log(svgViewBox, window.innerWidth);
    if (window.innerWidth * 2 < svgViewBox.width) {
      const newWidth = Math.max(window.innerWidth * 2, 720);
      svg.setAttribute(
        "viewBox",
        `${(svgViewBox.width - newWidth) / 2} 0 ${newWidth} ${
          svgViewBox.height
        }`
      );
    }
  }, []);

  return (
    <div>
    <div className="converImageContainer">
      <CoverImage id="coverImage" />
    </div>
    </div>
  );
}
