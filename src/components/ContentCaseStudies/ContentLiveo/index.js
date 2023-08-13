"use client";
import React, { useState } from "react";

import styles from "../../../styles/case-studies-detail.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentRovo = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "Liveo is a platform designed to facilitate effective engagement between celebrities and their fans. It provides fans with exclusive access to the stars' premium content. ",

      "The challenges lie in developing the application with advanced capabilities to seamlessly handle a wide sophisticated range of media formats, including images, videos, and live streaming."],
    solutions: [
      "Rockship showcased its exceptional capabilities by successfully building and launching the Liveo app in a remarkably efficient timeframe of nine months. ",

      "This accomplishment resulted in the creation of a thriving fan community platform that gained significant popularity. The Liveo app offers a range of key features that contribute to its success, including:"
    ],
    mains: [],
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem title={"Challenge"} data={detail?.challenges} />
        <DescriptionItem title={"Solution"} data={detail?.solutions} />
        <img src="/liveo_screenshots.svg"></img>
      </div>
    </>
  );
};

export default ContentRovo;
