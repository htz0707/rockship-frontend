"use client";

import React from "react";
import styles from "./PlatformItem.module.scss";

const PlatformItem = ({ item, onSelectPlatform, isSelected, currentStep }) => {
  const onClickSelectPlatform = (item) => {
    onSelectPlatform(item);
  };
  const className = () => {
    if(currentStep === 3) {
        return 'platform-item-third-step'
    }
    if(currentStep === 4) {
        return 'platform-item-fourth-step'
    }
    return 'platform-item'
  }
  return (
    <div
      className={
        styles[className()] + " " + `${isSelected ? styles["active"] : ""}`
      }
      onClick={() => onClickSelectPlatform(item)}
    >
      <div className={styles["platform-title"]}>
        <div className={styles["platform-logo"]}>
          <img src={item.logo} alt={item.title} />
        </div>
        <div className={styles["platform-name"]}>{item.title}</div>
      </div>
      <div className={styles["delivered-date"]}>
        <div className={styles["delivery-text"]}>Delivered by:</div>
      </div>
    </div>
  );
};

export default PlatformItem;
