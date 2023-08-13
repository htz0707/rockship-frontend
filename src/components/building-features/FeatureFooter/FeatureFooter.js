"use client";
import React from "react";
import styles from "./FeatureFooter.module.scss";
import Stepper from "@/components/building-features/Stepper/Stepper";

const FeatureFooter = ({
  isMobile,
  currentStep,
  setCurrentStep,
  onClickBack,
  onClickNext,
}) => {
  const renderFooter = () => {
    return <Stepper currentStep={currentStep} onStepClick={setCurrentStep} />;
  };
  return (
    <>
      {!isMobile ? (
        <div className={styles["footer-features"]}>
          <div className={styles["footer-container"]}>
            {currentStep > 1 ? (
              <div
                className={styles["button"] + " " + styles["btn-back"]}
                onClick={onClickBack}
              >
                Previous
              </div>
            ) : null}
            {renderFooter()}
            {currentStep < 4 ? (
              <div
                className={styles["button"] + " " + styles["btn-next"]}
                onClick={onClickNext}
              >
                Next
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={styles["footer-features-mobile"]}>
          {currentStep > 1 ? (
            <div
              className={styles["button"] + " " + styles["btn-back"]}
              onClick={onClickBack}
            >
              Previous
            </div>
          ) : (
            <div />
          )}
          {currentStep < 4 ? (
            <div
              className={styles["button"] + " " + styles["btn-next"]}
              onClick={onClickNext}
            >
              Next
            </div>
          ) : (
            <div />
          )}
        </div>
      )}
    </>
  );
};

export default FeatureFooter;
