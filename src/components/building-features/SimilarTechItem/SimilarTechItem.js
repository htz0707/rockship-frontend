"use client";

import React from "react";
import styles from "./SimilarTechItem.module.scss";

const SimilarTechItem = ({ item, selectSimilarApps, isSelected, currentStep }) => {
  const onClickSelectItem = (item) => {
    selectSimilarApps(item);
  };

  const className = () => {
    if(currentStep === 1) {
        return 'similar-tech-item-container-first-step'
    }
    if(currentStep === 4) {
        return 'similar-tech-item-container-fourth-step'
    }
    return 'similar-tech-item-container'
  }

  return (
    <div
      className={
        styles[className()] +
        " " +
        styles[`${isSelected ? "active" : ""}`]
      }
      onClick={() => onClickSelectItem(item)}
    >
      <div className={styles["item-detail-top"]}>
        <div className={styles["logo"]}>
          <img src={item.logo} alt="logo" />
        </div>
        <div className={styles["company-name"]}>{item.title}</div>
      </div>
      <div className={styles["description"]}>{item.description}</div>
    </div>
  );
};

export default SimilarTechItem;
