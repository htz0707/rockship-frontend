"use client";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentJustotter = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "Many restaurant businesses rely on multiple software solutions for different purposes, which often leads to the challenge of integrating these solutions and the associated overhead costs. Additionally, the majority of restaurant staff members are not well-versed in selecting the right technology and often rely on referrals from other establishments. As a result, restaurants often find themselves dependent on outdated technologies.",
      "However, when the pandemic strikes, technology becomes a crucial tool for local businesses to compete with one another. It provides them with the opportunity to adapt and stay relevant in the market. Furthermore, prominent restaurant chains like Luckin Coffee and HeyTea have successfully leveraged technology as a competitive advantage, further highlighting the importance of technological advancements in the industry.",
    ],
    solutions: [
      "We have developed a modular restaurant operation system that allows restaurants to deploy a fully integrated system based on their specific needs. Rockship has been instrumental in assisting JustOtter with prototyping the solution and addressing key product challenges, such as building a digitalized menu and integrating blockchain for restaurant loyalty programs. We approach the restaurant business by breaking it down into clusters of software modules.",
      "We also prioritize the importance of a beautiful user experience design to ensure that the system is user-friendly and intuitive for restaurant staff to utilize.",
    ],
    mains: [
      {
        id: 1,
        title: "Menu Interface",
        data: [
          { id: 1, name: "Signup/Login" },
          { id: 2, name: "Store Management" },
          { id: 3, name: "Dashboard" },
        ],
        src: "/justotter1.png",
      },
      {
        id: 2,
        title: "Customer Management",
        data: [
          { id: 1, name: "Loyalty Program" },
          { id: 2, name: "Marketing Campaign" },
        ],
        src: "/justotter2.png",
      },
      {
        id: 3,
        title: "Queue management",
        data: [
          { id: 1, name: "Reservation" },
          { id: 2, name: "QR-code based queue" },
        ],
        src: "/justotter3.png",
      },
      {
        id: 4,
        title: "Inventory management",
        data: [
          { id: 1, name: "Table" },
          { id: 2, name: "Ordering" },
          { id: 3, name: "Dashboard" },
        ],
        src: "/justotter4.png",
      },
    ],
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem title={"Challenge"} data={detail?.challenges} />
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

export default ContentJustotter;
