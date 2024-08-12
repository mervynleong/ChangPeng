import React from "react";
import styles from "../css/Standard.module.css";

const Skills = () => {
  return (
    <div className={styles.profileContainer}>
      <ul className={styles.educationListNoStyle}>
        <li>Computer Languages:</li>
      </ul>

      <ul className={styles.educationList}>
        <li>CSS</li>
      </ul>
      <ul className={styles.educationList}>
        <li>HTML</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Python</li>
      </ul>
      <ul className={styles.educationList}>
        <li>MATLAB</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Javascript (Not Java)</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>DataBases Related:</li>
      </ul>
      <ul className={styles.educationList}>
        <li>MongoDB</li>
      </ul>
      <ul className={styles.educationList}>
        <li>PostgreSQL</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>FrameWorks:</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Express.js / React.js</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>Other:</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Node.js</li>
      </ul>
      <ul className={styles.educationList}>
        <li>SAP</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Microsoft Excel/ Word/ Powerpoint</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>Engineering Design:</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Pro-E</li>
      </ul>
      <ul className={styles.educationList}>
        <li>AUTOCAD</li>
      </ul>
    </div>
  );
};

export default Skills;
