import React from "react";

import styles from "./Mission.module.css";
import { getImageUrl } from "../../utils";

export const Mission = () => {
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>OUR MISSION</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
           
            <div className={styles.aboutItemText}>
              <h3>"At 2Star IT Solutions Private Limited, our mission is to enhance value 
                and contribute to our clients' long-term success and competitive strength. 
                This is achieved by assisting clients in identifying performance-enhancing
                 solutions, facilitating their implementation, and providing support in 
                 managing subsequent changes. We firmly believe that the success of every 
                 project hinges on the careful selection of a competent vendor. With a proven 
                 track record in delivery and an unwavering commitment to quality products, 
                 we invite you to explore our various services."
              </h3>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
export default Mission;