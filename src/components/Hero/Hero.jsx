import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
     
    
        <h1 className={styles.title}>2STAR IT SOLUTION PRIVATE LIMITED</h1>
        <p className={styles.description}>
        "ELEVATING DIGITAL EXCELLENCE, ONE SOLUTION AT A TIME"
        </p>
        <a href="https://education-profile.vercel.app/" className={styles.contactBtn}>
          Courses
        </a>
        
      </div>
    
     
    </section>
  );
};
