import { useEffect } from "react";
import anime from "animejs";
import CoverImageDay from "../public/CoverDay.svg";
import CoverImageNight from "../public/CoverNight.svg";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './index.module.scss';

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

  const isDayTime = new Date().getHours() > 6 && new Date().getHours() < 20;

  const CoverImage = isDayTime ? CoverImageDay : CoverImageNight;

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <img src="/icons/LogoDark-256x256.png" height={42} width={42} />
        {/* <Typography variant="h6" className={styles.title}>
          Garažica
        </Typography> */}
      </Toolbar>
    </AppBar>
    <div className="converImageContainer">
      <CoverImage id="coverImage" />
    </div>
    </>
  );
}
