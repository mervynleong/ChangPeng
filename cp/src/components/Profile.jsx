import React from "react";
import styles from "../css/Standard.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div>Name: Leong Chang Peng</div>
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
    </div>
  );
};

export default Profile;
