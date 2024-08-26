import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/team.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>OUR SERVICES</h2>
      <div className={styles.content}>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} `}</h3>
                  
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
