"use client"
import React from "react";
import styles from './SecondStep.module.scss'

const FeatureSearchList = (props) => {
  const { items, handleChangeCheckbox } = props;
  return (
    <div className={styles["feature-item-container"]}>
      <div className={styles["feature-item-label"]}>
        <div className={styles["feature-item-name"]}>Got {items.length} results</div>
        <div className={styles["number-of-features"]}>
          ({items.filter((item) => item.checked).length}/{items.length})
        </div>
      </div>
      <div className={styles["list-features"]}>
        {items.map((feature) => (
          <div className={styles["feature-item"]} key={feature.key}>
            <label>
              <input
                checked={feature.checked}
                type="checkbox"
                onChange={() =>
                  handleChangeCheckbox(feature.itemId, feature.id)
                }
              />
              <span className={`${feature.checked ? "active" : ""}`}>
                {feature.feature}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeatureSearchList;
