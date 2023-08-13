"use client";
import React, { useState } from "react";

import styles from "../../../styles/case-studies-detail.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentWorknow = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "WorkNow is an advanced online platform that connects users with esteemed space providers, offering on-demand office services. This platform was born out of the realization that an increasing number of startup companies have shifted to hybrid or remote working setups.",
      "The main challenge for WorkNow is to identify the types of office services that should be offered to enterprises in Vietnam, taking into consideration their concerns regarding the effectiveness of hybrid or remote working methods.",
    ],
    solutions: [
      "Rockship has been a strong supporter of WorkNow since its initial entry into the Vietnam market. We collaborated closely with numerous space providers in Vietnam, conducting interviews using advanced AI-based tools. This allowed us to engage with popular brands such as Circo and MindX Startup Space, among others. Additionally, Rockship connected with multiple startup companies that either consider or have already embraced more flexible working arrangements.",
      "After thoroughly immersing ourselves in the market and gathering insights from both providers and users, Rockship discovered that most companies prefer an all-in-one office solution rather than one tailored for a specific purpose.",
      "Based on that valuable insight, we utilized our Systematic Prototype process and officially launched WorkNow in January 2023, after just six months of development. WorkNow was carefully designed as a full-fledged office solution for both Workspace Providers and Business Customers, enabling them to effortlessly manage bookings, track transaction history, and handle payments. Businesses that utilize WorkNow also benefit from enhanced visibility into their hybrid/remote resources through the management dashboard.",
    ],
    mains: [
      {
        id: 1,
        title: "On-demand booking",
        content:
          "Allows Clients to view and select locations, types of workspaces according to each location, book with the desired location at anytime and in anywhere.",
        src: "/worknow1.png",
      },
      {
        id: 2,
        title: "Hybrid workforce management",
        content:
          "Allows Corporate Clients to expand their “offices” with diverse and rich locations to create better working conditions for employees.",
        src: "/worknow2.png",
      },
      {
        id: 3,
        title: "Queue management",
        content:
          "Dashboard for Space providers to manage locations, bookings and customer database.",
        src: "/worknow3.png",
      },
      {
        id: 4,
        content:
          "Prior to WorkNow, space providers had to manually track client bookings using Excel spreadsheets. Our platform offers a comprehensive toolset to enhance the management of workspaces, enabling space providers to operate more efficiently. Unlike the cumbersome manual check-in process employed by most space providers, we offer a QR code system that allows space users to check in conveniently. Overall, WorkNow significantly improves space operations for providers, optimizing their efficiency.",
      },
      {
        id: 5,
        content:
          "In response to the growing trend of companies adopting hybrid workforces, WorkNow has also developed a tool specifically designed to facilitate effective management of such work models. Leveraging the inventories provided by WorkNow, this tool enables companies to seamlessly operate their hybrid workforces.",
      },
    ]
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem
          title={"Challenge"}
          data={detail?.challenges}
        />
        <DescriptionItem
          title={"Solution"}
          data={detail?.solutions}
        />
        <div className={styles["description-item"]}>
          <p><b>In details, Worknow offer a comprehensive solution with 3 main features:</b></p>
        </div>
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

export default ContentWorknow;
