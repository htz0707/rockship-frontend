"use client"
import React, { useState, useEffect } from 'react';
import styles from './SecondStep.module.scss'
const FeatureItem = ({ item, handleChangeCheckbox, isCollapse: initialIsCollapse }) => {
  const [isCollapse, setIsCollapse] = useState(initialIsCollapse);

  useEffect(() => {
    if (item.list_features.some((feature) => feature.checked)) {
      setIsCollapse(true);
    }
  }, [item]);

  const onCollapseFeatures = () => {
    setIsCollapse((prevIsCollapse) => !prevIsCollapse);
  };

  const onChangeCheckbox = (listId) => {
    handleChangeCheckbox(listId);
  };

  return (
    <div className={styles["feature-item-container"]}>
      <div className={styles["feature-item-label"]}>
        <div
          className={styles["feature-item-name"]}
          style={{
            fontWeight: isCollapse ? 'bold' : '',
            color: isCollapse ? '#448db9' : '',
          }}
          onClick={onCollapseFeatures}
        >
          {isCollapse ? (
            <i className="fas fa-chevron-down" />
          ) : (
            <i className="fas fa-chevron-up" />
          )}
          <span className={styles["title"]}>{item.title}</span>
        </div>
        <div className={styles["number-of-features"]}>
          ({item.list_features.filter((feature) => feature.checked).length}/{item.list_features.length})
        </div>
      </div>
      <div className={styles["list-features"]} style={{ display: isCollapse ? 'block' : 'none' }}>
        {isCollapse &&
          item.list_features.map((feature) => (
            <div className={styles["feature-item" ]}key={feature.id}>
              <label>
                <input
                  checked={feature.checked}
                  type="checkbox"
                  name={`feature-${item.id}`}
                  value={feature.feature}
                  onChange={() => onChangeCheckbox(feature.id)}
                />
                <span className={`${feature.checked ? 'active' : ''}`}>{feature.feature}</span>
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeatureItem;
