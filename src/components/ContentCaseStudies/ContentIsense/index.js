"use client";
import React, { useState } from "react";

import styles from "../../../styles/case-studies-detail.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentIsense = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "iSense is on a mission to revolutionize the flavor industry by embracing the digital realm. The taste industry demands efficiency and swiftness, but these goals have been difficult to achieve due to the mysterious nature of flavors, which have traditionally been treated as black boxes. ",
      "iSense came up with the concept that revolves around creating a distinct digitized sensory profile for every flavor (DATA), along with a flavor collection management tool and a B2B marketplace (DIGITAL TOOLS). However, despite their groundbreaking idea, iSense team faced the challenge of determining where to begin, as it remains an ambitious and somewhat ambiguous endeavor.",
    ],
    solutions: [
      "Rockship and iSense have collaborated to develop an MVP version of a marketplace that connects flavor houses with procurement teams.",
      "This platform allows flavor houses to upload their flavor documentation, which can be accessed by procurement teams for requesting samples. This levels the playing field, benefiting smaller flavor houses as well. Moreover, the MVP will eventually enable users to leverage this data to address crucial business inquiries and make informed decisions.",
      "Rockship team has taken on the concept and developed an MVP that includes the following modules:", "Customer relationship management (CRM): Provide fitness business owners with a comprehensive set of features to efficiently enhance customer relationships including:"
    ],
    partnership: ["Rockship has been a valuable partner in supporting iSense in various aspects of their business. Firstly, we assisted iSense in building a data extraction spider to efficiently extract flavor data from spreadsheets. This process significantly streamlined their onboarding process, allowing them to incorporate numerous flavors at once. The data processing tool developed by Rockship effectively handles different data sources such as CSV files and data feeds, resolving format discrepancies and ensuring data cleanliness. Additionally, it incorporates measures to prevent duplicates in the data.",

      "Furthermore, Rockship worked closely with iSense to enhance their user interface (UI) throughout their customer discovery journey, specifically focusing on optimizing the signup flow and marketplace interface. By thoroughly understanding iSense's intentions and requirements, we provided multiple options for the client to choose from, fostering a collaborative and iterative design process. Despite the geographical distance, our teams maintained a seamless working relationship, conducting weekly meetings to demo our progress and gather valuable feedback. Adhering to the agreed-upon schedule, we successfully delivered the project on time.",

      "In addition to our development efforts, Rockship offered ongoing support to iSense during challenging periods, ensuring both businesses could grow together. During the go-to-market phase, we actively assisted iSense in resolving bugs and addressing issues without incurring any extra costs, enabling them to focus on user discovery and market penetration. Our working relationship with iSense extends beyond a typical client-contractor dynamic, as we truly consider ourselves partners invested in their success."
    ],
    mains: [
      {
        id: 1,
        title: "Marketplace",
        data: [
          { id: 1, name: "Search" },
          { id: 2, name: "Filter" },
          { id: 3, name: "Compare items" },
        ],
        src: "/iSense 2.svg",
      },
      {
        id: 2,
        title: "Flavor Management",
        data: [
          { id: 1, name: "Upload/Edit/Publish Items" },
          { id: 2, name: "Shopping Cart" },
        ],

        src: "/iSense 3.svg",
      },
      {
        id: 3,
        title: "Account Management",
        data: [
          { id: 1, name: "Create account" },
          { id: 2, name: "Admin dashboard" },
          { id: 3, name: "Company Profile" },
        ],
        src: "/iSense 4.svg",
      },
      {
        id: 4,
        title: "Others",
        data: [
          { id: 1, name: "Landing page" },
          { id: 2, name: "Data warehousing" },
          { id: 3, name: "Security service" },
        ],
        src: "/iSense 5 2.svg",
      },

    ],
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
      <div className={styles["description"]}>
        <DescriptionItem
          title={"Software development partnership"}
          data={detail?.partnership}
        />
      </div>
    </>
  );
};

export default ContentIsense;
