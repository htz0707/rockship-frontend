import React, { useState, useEffect } from "react";
import { Select } from "antd";
import styles from "./timeline.module.scss";
import GanttChart from "../GanttChart";
import { analytics } from "@/segment/segment";

export default function Timeline({ setStep, allData }) {
  const [option, setOption] = useState([]);
  const [data, setData] = useState(allData.backend);

  const handleChange = (value) => {
    if (value === "back-end") {
      setData(allData.backend);
    } else if (value === "web") {
      setData(allData.web);
    } else if (value === "app") {
      setData(allData.app);
    } else if (value === "design") {
      setData(allData.design);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("mobile") === "true" &&
      localStorage.getItem("webapp") === "true"
    ) {
      setOption([
        {
          value: "back-end",
          label: "Back-end",
        },
        {
          value: "web",
          label: "Web",
        },
        {
          value: "design",
          label: "Design",
        },
        {
          value: "app",
          label: "App",
        },
      ]);
    } else if (localStorage.getItem("mobile") === "true") {
      setOption([
        {
          value: "back-end",
          label: "Back-end",
        },
        {
          value: "design",
          label: "Design",
        },
        {
          value: "app",
          label: "App",
        },
      ]);
    } else if (localStorage.getItem("webapp") === "true") {
      setOption([
        {
          value: "back-end",
          label: "Back-end",
        },
        {
          value: "web",
          label: "Web",
        },
        {
          value: "design",
          label: "Design",
        },
      ]);
    }
  }, []);

  return (
    <div className={styles["chart"]}>
      <div className={styles["header"]} onClick={() => setStep(1)}>
        <img src="/arrow-left-2.svg" alt="" />
        <p>TIMELINE</p>
      </div>
      <Select
        style={{
          width: 200,
        }}
        options={option}
        defaultValue={"back-end"}
        onChange={handleChange}
      />
      <div className={styles["chart-box"]}>
        <GanttChart data={data} />
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={styles["left"]}>
          <p className={styles["features-days"]}>
            {localStorage.getItem("numberOfFeatures")} features
            {/* -{" "} */}
            {/* {Math.round(localStorage.getItem("totalDay") / 7)} weeks */}
          </p>
          <p className={styles["cost"]}>
            ${" "}
            {Math.round(localStorage.getItem("totalCost")).toLocaleString(
              "en-US"
            )}
          </p>
        </div>
        <div className={styles["right"]}>
          <div className={styles["timeline"]} onClick={() => setStep(1)}>
            <img height={20} src="/arrow-left-3.svg" alt="arrow" />
            <span>Quotation</span>
          </div>
          <div
            className={styles["go-with-us"]}
            onClick={() => {
              analytics.track("cta-chatbot");
              window.open(
                "https://calendly.com/binhngoc17/rockship-app-builder",
                "_blank"
              );
            }}
          >
            <span>Schedule a demo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
