"use client";
import React, { useState } from "react";

import styles from "../../../styles/case-studies-detail.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentTedez = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [],
    solutions: [
      "Given the platform's innovative nature within the Vietnamese market, Rockship employed the power of AI to assist the company in conducting thorough user research and identifying the pain points experienced by 3 target user segments:",
    ],
    solutions2: [
      "The subsequent requirement for developing the TedEZ prototype involves leveraging AI tools to provide essential support during the development process. In a remarkably short span of three months, the initial version of the TedEZ prototype has been successfully completed, encompassing pivotal key features of the Community platform, including:",
    ],
    mains: [
      {
        id: 1,
        title: "Events and Webinars",
        content: "Administrators have the capability to create and manage specific events or activities. They can also assign users to participate in particular events or activities, granting them access to relevant content including both free access and event-exclusive content.",
        src: "/tedez1.svg",
      },
      {
        id: 2,
        title: "Social Networking",
        content:
          "TedEZ platform offers a range of features that enable seamless user connections, following, and interactions, fostering a strong sense of belonging and community engagement.",
        src: "/tedez2.svg",
      },
      {
        id: 3,
        title: "User Profiles",
        content:
          ["Users can conveniently sign up via email or other social channels. Upon registration, each member gains access to a personalized profile, showcasing their interests, contributions, and community activity.", "Moving forward, Rockship remains dedicated to providing continuous support for TedEZ, facilitating the incorporation of additional features. As we progress, we will harness the power of AI in our development process to expedite workflows while upholding the standard of delivering high-quality outcomes."],
        src: "/tedez3.svg",
      },
    ]
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem title={"Challenge"} data={detail?.challenges} />
        <div className={styles["description-item"]}>
          <p>
            TedEZ has been established as a groundbreaking <b>cohort-based</b> model that revolutionizes the educational landscape. The platform empowers content creators to effortlessly tailor their educational materials to meet the unique needs of end users.,
          </p>
          <p>
            The founders of TedEZ are seeking the expertise of Rockship to conduct user research and prototype an AI-based adaptive learning platform specifically designed for target customers. This collaboration aims to bring their vision to life and create an exceptional learning environment for the target audience.,
          </p>
          <p>
            [<b>Cohort-based</b> learning entails a collaborative learning method where students or individuals progress together as a group throughout the entire duration of a course, program, or project. Instructors or mentors guide the group of students to achieve predefined milestones]
          </p>
        </div>
      </div>
      <div className={styles["description"]}>
        <DescriptionItem title={"Solution"} data={detail?.solutions} />
        <div className={styles["description-item"]}>
          <p>
            <ul>
              <li>The educators have no or little support system that enables them to effectively share their knowledge and earn what they deserve</li>
              <li>The organizations striving to retain their talented workforce are burdened with fragmented, outdated, and impractical programs that fail to meet their needs</li>
              <li>Based on invaluable insights, Rockship recommended that TedEZ positions itself as a dynamic and multi-disciplinary learning platform with adaptability, catering specifically to the Vietnamese market</li>
            </ul>
          </p>
        </div>
        <DescriptionItem title={""} data={detail?.solutions2} />
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
        <div className={styles["description-item"]}>
          <p>
            Moving forward, Rockship remains dedicated to providing continuous support for TedEZ, facilitating the incorporation of additional features. As we progress, we will harness the power of AI in our development process to expedite workflows while upholding the standard of delivering high-quality outcomes.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContentTedez;
