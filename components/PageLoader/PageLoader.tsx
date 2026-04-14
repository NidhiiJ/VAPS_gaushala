"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PageLoader.module.scss";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!visible) return null;

  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.glow} />

      <div className={styles.spinnerWrapper}>
        <svg
          width={136}
          height={136}
          viewBox="0 0 136 136"
          fill="none"
          className={styles.svg}
        >
          <circle cx={68} cy={68} r={radius} className={styles.track} />
          <circle
            cx={68}
            cy={68}
            r={radius}
            className={styles.arc}
            strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
          />
        </svg>

        <div className={styles.logoWrapper}>
          <Image
            src="/logo/logo.png"
            alt="Suri Prem Jiv Raksha Kendra"
            width={72}
            height={72}
            className={styles.logo}
            priority
          />
        </div>
      </div>
    </div>
  );
}
