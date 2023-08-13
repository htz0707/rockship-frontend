"use client";
import React from "react";
import { number, func } from "prop-types";
import styles from "./Stepper.module.scss";

const renderlsStep = (lsStep, currentStep, handleOnStepClick) => {
  return lsStep.map((step, pos) => {
    if (pos + 1 <= currentStep)
      return (
        <li
          key={pos}
          onClick={() => handleOnStepClick(pos + 1)}
          className={styles["active"]}
        >
          <span>{step}</span>
        </li>
      );
    return (
      <li onClick={() => handleOnStepClick(pos + 1)} key={pos}>
        {step}
      </li>
    );
  });
};

const Stepper = (props) => {
  const lsStep = ["Apps", "Features", "Delivery", "Overview"];
  return (
    <ul className={styles["list-step"]}>
      {renderlsStep(lsStep, props.currentStep, props.onStepClick)}
    </ul>
  );
};

Stepper.propTypes = {
  currentStep: number,
  onStepClick: func,
};

Stepper.defaultProps = {
  currentStep: 1,
  onStepClick: () => {},
};

export default Stepper;
