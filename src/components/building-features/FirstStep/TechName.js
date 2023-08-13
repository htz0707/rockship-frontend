"use client";

import React from "react";
import styles from "./FirstStep.module.scss";

const TechName = ({ item, selectTech, selectedTech }) => {
  const onClickSelect = (item) => {
    selectTech(item);
  };
  return (
    <div
      className={
        styles["tech-container"] +
        " " +
        styles[`${selectedTech === item.key ? "is-active" : ""}`]
      }
      onClick={() => onClickSelect(item)}
    >
      <div className={styles["tech-title"]}>{item.title}</div>
      <div className={styles["tech-description"]}>{item.description}</div>
    </div>
  );
};

export default TechName;
