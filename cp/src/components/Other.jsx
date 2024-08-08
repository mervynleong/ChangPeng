import React from "react";
import styles from "../css/Standard.module.css";

const Other = () => {
  return (
    <div className={styles.profileContainer}>
      <p>Click the links below to see my other pages:</p>
      <a
        href="https://github.com/mervynleong"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
      <div></div>
      <a
        href="https://www.linkedin.com/in/mervyn-leong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        My LinkedIn
      </a>
      <div></div>
      <a href="" target="_blank" rel="noopener noreferrer">
        My Resume
      </a>
    </div>
  );
};

export default Other;
