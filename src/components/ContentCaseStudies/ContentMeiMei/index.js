"use client";
import React, { useState } from "react";

import styles from "../../../styles/case-studies-detail.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentMeiMei = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "According to market research from Q&ME, the rising GDP of Vietnam is expected to drive an increase in beauty industry demand. The findings suggest that Vietnamese individuals opt for plastic surgery not primarily to seek approval from others but rather to enhance their own appearance and achieve personal satisfaction.",
      "With the rising popularity of cosmetic surgery in Vietnam, there is a noticeable absence of a technology platform which provides a strong support for this beauty community. The current scenario presents several challenges for individuals seeking cosmetic surgery solutions."],
    solutions: [
      "Rockship has introduced a groundbreaking solution in the form of a mobile app: Mei Mei. This app utilizes facial scanning technology to assess your face and provide recommendations on the necessary cosmetic procedures to enhance your appearance. Moreover, it can offer a comprehensive list of recommended surgeons, along with the convenience of scheduling appointments and making payments for both consultations and surgeries.",
      "The Mei Mei platform is designed to comprise the following detailed modules:"],
    mains: [
      {
        id: 1,
        title: "AI Scan & Suggest",
        data: [

          { id: 1, name: "Scan user facial features" },
          { id: 2, name: "Suggest beauty surgeries that user should consider to perform" }

        ],

        src: "/meimei1.svg",
      },
      {
        id: 2,
        title: "O2O platform",
        data: [

          { id: 1, name: "Schedule appointment for consultation & surgery services" },
          { id: 2, name: "Payment for Services" }
        ],
        src: "/meimei2.svg",
      },
      {
        id: 3,
        title: "Social Media",
        data: [
          { id: 1, name: "Content Sharing platform" },
          { id: 2, name: "Like/Share/Comment " }
        ],
        src: "/meimei3.svg",
      },
      {
        id: 4,
        content: "MeiMei is expected to revolutionize the way people approach cosmetic surgery. Our team at Rockship is working on this project and will soon launch MeiMei as the greatest platform for beauty community in Vietnam."
      }
    ],
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem title={"Challenge"} data={detail?.challenges} />
        <div className={styles["description-item"]}>
          <p>
            <ul>
              <li>Firstly, users face difficulties in finding suitable starting points for cosmetic surgery tailored to their unique facial features. </li>
              <li>Additionally, those who have undergone successful procedures lack a community platform to share their beauty-pursuing journey through cosmetic surgery. </li>
              <li>Furthermore, the absence of a decentralized platform hinders users from conducting comprehensive research and finding reliable consultancy on cosmetic surgery, including information about skilled doctors to perform the surgeries. </li>
            </ul>
            Addressing these issues is crucial to establishing a more accessible, informed, and supportive environment for those considering cosmetic surgery.
          </p>
        </div>
        <DescriptionItem title={"Solution"} data={detail?.solutions} />

      </div>
      <div className={styles["menu-list"]}>
        {detail?.mains?.map((item, index) => {
          if (item.content && !item.src) {
            return (
              <div className={styles["menu"]} key={index}>
                <p>{item.content}</p>
              </div>
            );
          }
          return (
            <div className={styles["menu"]} key={index}>
              <MenuItem
                title={item?.title}
                lsValue={item?.data}
                content={item?.content}
              />
              <img src={item?.src} alt={"menu"} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentMeiMei;
