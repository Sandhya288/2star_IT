import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>INTRODUCTION</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
           
            <div className={styles.aboutItemText}>
              <h3>"Established in 2008 by Mr. Rajendra Shetty, Ras Al Khaima National ENT, 
                 initially based in Oman, is renowned for its expertise. Now, it expanded
                 globally, opening a new branch in India named '2Star IT Solutions Private 
                 Limited.' Under Mr.Rajendra M Shetty's leadership as Managing Director, 
                 the company has grown consistently, offering a wide array of computing 
                 services, products, and solutions to an international clientele, 
                 reaffirming its commitment to professional IT services."</h3>
             
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
