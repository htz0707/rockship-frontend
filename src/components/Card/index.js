"use client";
import React from "react";
import styles from "./card.module.scss";

const Card = ({
  imageSrc = "",
  handleOnClickCard = () => null,
  title = "",
  description = "",
  lsValue = [],
}) => {
  return (
    <div className={styles["card"]} onClick={handleOnClickCard}>
      <img
        src={imageSrc}
        alt="card-image"
      />
      <div className={styles["card-content"]}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles["card-list"]}>
        {lsValue.map((item) => {
          return (
            <div key={item.id} className={styles["card-item"]}>
              <p>{`#${item.name}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
