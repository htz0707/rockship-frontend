import React, { useState, useEffect, useRef } from "react";
import PlatformItem from "../PlatformItem/PlatformItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./ThirdStep.module.scss";

const ThirdStep = ({ getValue, getSpeed, arrPlatform }) => {
  const myRef = useRef();
  const [listPlatform] = useState([
    {
      id: 1,
      logo: "/images/design@2x.png",
      title: "Design",
    },
    {
      id: 2,
      logo: "/images/apple@2x.png",
      title: "iOS",
    },
    {
      id: 3,
      logo: "/images/android.png",
      title: "Android",
    },
    {
      id: 4,
      logo: "/images/web.png",
      title: "Web",
    },
  ]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [value, setValue] = useState(5);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (arrPlatform.length) {
      setSelectedPlatform(arrPlatform);
    }
  }, [arrPlatform]);

  useEffect(() => {
    getSpeed(renderLabel(value));
  }, [value, getSpeed]);

  const onSelectPlatform = (item) => {
    const updatedPlatform = selectedPlatform.includes(item)
      ? selectedPlatform.filter((platform) => platform.id !== item.id)
      : [...selectedPlatform, item];

    setSelectedPlatform(updatedPlatform);
    getValue(updatedPlatform);
  };

  const renderListPlatform = () => {
    const ids = selectedPlatform.map((item) => item.id);
    return listPlatform.map((item) => (
      <PlatformItem
        key={item.id}
        item={item}
        isSelected={ids.includes(item.id)}
        onSelectPlatform={() => onSelectPlatform(item)}
        currentStep={3}
      />
    ));
  };

  const renderLabel = (value) => {
    switch (value) {
      case 5:
        return "Low";
      case 10:
        return "Medium";
      case 15:
        return "Fast";
      default:
        return "Relax";
    }
  };

  const renderMarks = () => {
    const marks = { 0: "", 5: "", 10: "", 15: "" };
    marks[value] = renderLabel(value);
    return marks;
  };

  return (
    <div className={styles["third-step-container"]} ref={myRef}>
      <div className={styles["third-step-wrap"]}>
        <div className={styles["step-title"]}>Choose project speed</div>
        <div className={styles["speedbar-container"]}>
          <Slider
            step={5}
            max={15}
            min={0}
            dots
            marks={renderMarks()}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <div className={styles["step-title"] + " " + styles["choose-platform"]}>
          Choose all the required platforms for your project
        </div>
        <div className={styles["platform-list"]}>{renderListPlatform()}</div>
      </div>
    </div>
  );
};

export default ThirdStep;
