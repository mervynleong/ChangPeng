import React from "react";
import styles from "../css/Standard.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div>Name: Leong Chang Peng</div>
      <div>Alias: Mervyn</div>
      <div>Gender: Male</div>
      <div>Education:</div>
      <ul className={styles.educationList}>
        <li>Degree In Materials Science And Engineering</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>College: Nanyang Technological University</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Diploma in Mechanical Engineering</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>Polytechnic/ HighSchool: Singapore Polytechnic</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>Languages (spoken/written):</li>
      </ul>
      <ul className={styles.educationList}>
        <li>English</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Chinese</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Japanese</li>
      </ul>
      <ul className={styles.educationListNoStyle}>
        <li>Interests:</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Software Development</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Game Development</li>
      </ul>
      <ul className={styles.educationList}>
        <li>Foreign Languages</li>
      </ul>
    </div>
  );
};

export default Profile;
