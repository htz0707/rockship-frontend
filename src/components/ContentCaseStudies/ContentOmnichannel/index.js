"use client";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { DescriptionItem, MenuItem } from "../Common";
const ContentOmnichannel = () => {
  const [detail, setItemCaseStudy] = useState({
    challenges: [
      "Rockship has collaborated with a valued partner, whose identity remains undisclosed, in creating an omnichannel payment solution for their merchants. This comprehensive solution encompasses online, payment terminal, and kiosk payment options. ",

      "While our partner possesses the potential to expand their business, they sought our assistance due to their limited expertise in mobile application development and integrating payment gateways. Our team is proud to have provided the necessary support to enable them to achieve their goals successfully."
    ],
    solutions: [
      "Leveraging our extensive experience in developing payment gateway connectors for Honestbee, Rockship offered valuable advisory services to the client in designing interfaces for seamless integration with numerous payment providers. During the implementation phase, we provided unwavering support, enabling the successful deployment of multiple payment methods to cater to their diverse user base:",
    ],
    mains: [],
  });

  return (
    <>
      <div className={styles["description"]}>
        <DescriptionItem title={"Challenge"} data={detail?.challenges} />
        <DescriptionItem title={"Solution"} data={detail?.solutions} />
        <div className={styles["description-item"]}>
          <p>  <img src="/Wechat.svg"></img>Payment by QR Code by WeChat</p>
          <p><img src="/Alipay.svg"></img>Payment by QR Code by AliPay</p>
          <p><img src="/Maybank.svg"></img>Payment by PayNow QR settled by Maybank</p>
          <p><img src="/CreditCard.svg"></img>Payment by Credit Card</p>
          <p>Upon successful payment settlement, an email notification will be automatically triggered and sent to the user, ensuring prompt communication and acknowledgment. Additionally, our platform empowers users to generate payment links, enabling them to efficiently collect payments from their clients.</p>

          <p>Drawing from our extensive expertise in implementing payment systems, we have incorporated a robust feature within the system, allowing comprehensive logging of payments to files. This logging capability facilitates detailed analysis and troubleshooting procedures in the event of any issues that may arise.</p>

          <p>Throughout the development lifecycle, our team actively supports testing and deployment processes, ensuring a seamless and efficient rollout of the payment system. Moreover, we are currently engaged in diligent research and examination of device specifications, while simultaneously crafting a customized application to meet all the API requirements of these devices. Our commitment to delivering a sophisticated and tailored solution remains unwavering.</p>
        </div>
      </div>
    </>
  );
};

export default ContentOmnichannel;
