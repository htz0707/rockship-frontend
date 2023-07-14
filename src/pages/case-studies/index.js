"use client";

import * as React from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "@/context";
import { setItemCaseStudy } from "@/context/actions/case-studies";

import CustomLayout from "@/components/Layout";
import SelectCustom from "@/components/SelectCustom";
import styles from "@/styles/case-studies.module.scss";
import filter from "../../../public/filter.svg";

const CardCaseStudies = ({ item, handleOnClickCard }) => {
  return (
    <div className={styles["card"]} onClick={handleOnClickCard}>
      <Image src={item?.src} alt="image" priority width={360} height={226} />
      <div className={styles["card-content"]}>
        <h4>{item?.title}</h4>
        <p>{item?.description}</p>
      </div>
      <div className={styles["card-hashtag"]}>
        {item?.hashtags.map((itemHashtag) => {
          return (
            <div key={itemHashtag.id} className={styles["card-hashtag-item"]}>
              <p>{`#${itemHashtag.name}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const caseStudies = [
    {
      id: 1,
      title: "Justotter",
      src: "/banner-case-studies.png",
      description:
        "JustOtter builds an operation system for every restaurants from menu ordering, loyalty program and queue management system. Rockship helps JustOtter prototypes the solution and tackle the product challenges in term of how to build a digitalized menu, how to integrate blockchain for restaurant loyalty program. Rockship also supports JustOtter in hiring the initial engineering team members in Vietnam.",
      hashtags: [
        { id: 1, name: "e-commerce" },
        { id: 2, name: "case-studies" },
        { id: 3, name: "low-cost" },
      ],
    },
  ];

  const handleOnClickFilter = () => {
    router.push("/case-studies/filter");
  };

  const handleOnClickCard = (item) => {
    router.push(`/case-studies/${item.id}`);
    dispatch(setItemCaseStudy(item));
  };
  return (
    <CustomLayout link={"studies"}>
      <div className={styles["case-studies"]}>
        <Row>
          <Col span={24}>
            <h2 className={styles["title"]}>case studies</h2>
            <div className={styles["filter"]}>
              <SelectCustom title={"Industry"} />
              <SelectCustom title={"Company Size"} />
              <SelectCustom title={"Market"} />
            </div>
            <Button
              className={styles["button-filter"]}
              onClick={handleOnClickFilter}
            >
              <Image src={filter} alt="Filter" priority />
              <p>Filter</p>
            </Button>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          {caseStudies.map((item) => {
            return (
              <Col xs={24} sm={12} md={8} key={item.id || index}>
                <CardCaseStudies
                  key={item.id}
                  item={item}
                  handleOnClickCard={() => handleOnClickCard(item)}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </CustomLayout>
  );
};

export default CaseStudies;
