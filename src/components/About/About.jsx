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
              <h3>"2Star IT Solutions Private Limited was established in India in 2023 by Mr. Rajendra M. Shetty, an experienced entrepreneur who has successfully run Ras Al Khaimah National ENT in Oman since 2008. With over 17 years of expertise in delivering dependable and innovative IT solutions, Mr. Shetty brings his proven leadership and industry knowledge to the Indian market through this new venture.

2Star IT Solutions is built on the same core values that shaped the success of its parent company in Oman — quality, trust, and customer focus. The company offers a wide range of computing services, IT products, and custom solutions tailored to meet the evolving needs of businesses locally and globally.

With a strong foundation and a forward-looking vision, 2Star IT Solutions is committed to delivering reliable technology solutions that empower businesses in the digital age."</h3>
             
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
