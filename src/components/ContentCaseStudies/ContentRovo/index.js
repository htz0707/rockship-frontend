"use client";
import React, { useState } from "react";

import styles from "../../../styles/case-studies-detail.module.scss";

import { DescriptionItem, MenuItem } from "../Common";
const ContentRovo = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "Rovo is a community for sports and fitness people.",
      "The core engineering team at Rovo is primarily dedicated to developing the mobile platform that connects sport players, and they lack the capacity to explore different product ideas, such as a booking platform for sport facilities. Consequently, it becomes challenging to rapidly assemble a team to effectively validate new product concepts.",
    ],
    solutions: []
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem title={"Challenge"} data={detail?.challenges} />
        <DescriptionItem title={"Solution"} data={detail?.solutions} />
        <div className={styles["description-item"]}>
          <p> As Rovo wished to scale up across Singapore and India, Rockship provided them with dedicated resources, including 4  tech-savvy software engineers. The team worked together and connected with the top CEO and CTO to gather valuable guidance on new product concepts: <b>Rovo for Business</b></p>
          <p><b>Rovo for Business</b> offers sports and fitness business owners the convenience of managing their operations on the go. This platform contains many modules that serve the needs of the savvy sports & fitness business owner.</p>
          <p>Rockship talents played a pivotal role in assisting Rovo with the successful release of essential modules, including:
            <ul>
              <li>Customer relationship management (CRM): Provide fitness business owners with a comprehensive set of features to efficiently enhance customer relationships including:
                <ul>
                  <li>Customer Information Management</li>
                  <li>Membership Management</li>
                  <li>Customer ratings & reviews</li>
                  <li>Reporting & analytics</li>
                </ul>
              </li>
              <li>Facility bookings: Allows fitness business owners to create and manage their facilities. This platform also facilitates sport players in easily discovering and reserving facilities based on their individual demands.</li>
            </ul>
            <img src="/rovo_preview.svg"></img>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContentRovo;
