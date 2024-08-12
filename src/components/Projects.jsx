import React from "react";
import styles from "../css/Standard.module.css";

const Projects = () => {
  return (
    <div className={styles.profileContainer}>
      <p>Click the links below to see my other Projects:</p>
      <a
        href="https://github.com/mervynleong/The_Rice_Game"
        target="_blank"
        rel="noopener noreferrer"
      >
        Plain Javascript Game Project - GitHub
      </a>
      <div></div>
      <a
        href="https://mervynleong.github.io/The_Rice_Game/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Page of the Game is Here
      </a>
      <div></div>
      <a
        href="https://github.com/mervynleong/project2ygo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Front-End Card Album Project - GitHub
      </a>
      <div></div>
      <a
        href="https://github.com/mervynleong/Echo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full-Stack Group Project M.E.R.N Chat App Project - GitHub
      </a>
      <div></div>
      <a
        href="https://github.com/mervynleong/project4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full-Stack P.E.R.N E-commerce Project - GitHub
      </a>
    </div>
  );
};

export default Projects;
