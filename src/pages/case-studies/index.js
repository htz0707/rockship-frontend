"use client";

import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import SelectCustom from "@/components/SelectCustom";
import styles from "@/styles/case-studies.module.scss";
import filter from "../../../public/filter.svg";
import Card from "@/components/Card";
import MetaTags from "@/components/MetaTags";
import { getCaseStudies, getLsCompanySize, getLsIndustry, getLsMarket } from "../api/case-studies";

const CaseStudies = () => {
  const router = useRouter();
  const { industry, companySize, market } = router.query;
  const [caseStudies, setCaseStudies] = useState([]);
  const [lsMarket, setLsMarket] = useState([]);
  const [lsCompanySize, setLsCompanySize] = useState([]);
  const [lsIndustry, setLsIndustry] = useState([]);


  const handleGetCaseStudies = async () => {
    const {success, data} =  await getCaseStudies(router.query);
    if (success) {
      setCaseStudies(data);
    }
  }

  const handleGetMarket = async () => {
    const {success, data} =  await getLsMarket();
    if (success) {
      setLsMarket(data);
    }
  }

  const handleGetIndustry = async () => {
    const {success, data} =  await getLsIndustry();
    if (success) {
      setLsIndustry(data);
    }
  }

  const handleGetCompanySize = async () => {
    const {success, data} =  await getLsCompanySize();
    if (success) {
      setLsCompanySize(data);
    }
  }

  const handleOnClickFilter = () => {
    const currentQuery = { ...router.query };
    router.push(
      {
        pathname: "/case-studies/filter",
        query:currentQuery,
      },
    );
  };

  const handleOnClickCard = (item) => {
    router.push(`/case-studies/${item.name}`);
    localStorage.setItem("itemDetail", JSON.stringify(item));
  };

  const handleOnChangeSelectFilter = (value, type) => {
  const currentQuery = { ...router.query };
  currentQuery[type] = value?.value || '';
  router.push(
    {
      pathname: router.pathname,
      query:currentQuery,
    },
    undefined,
    { shallow: true }
  );
  };

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      chunks.push(array?.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const chunkedData = chunkArray(caseStudies, 3);

  useEffect(() => {
    handleGetMarket();
    handleGetIndustry();
    handleGetCompanySize();
  }, []);

  useEffect(() => {
    handleGetCaseStudies();
  }, [router.query]);

  return (
    <>
      <MetaTags
        title={"Rockship | Case Studies"}
        description={"Explore Rockship's best software development projects."}
        image={"/case-studies-thumb.png"}
      />
      <CustomLayout link={"studies"}>
        <div className={styles["case-studies"]}>
          <Row>
            <Col span={24}>
              <h2
                className={styles["title"]}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="bottom-bottom"
              >
                case studies
              </h2>
              <div
                className={styles["filter"]}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-anchor-placement="bottom-bottom"
              >
                <SelectCustom
                  title={"Industry"}
                  lsOption={lsIndustry}
                  value={
                    industry
                  }
                  onChange={(value) =>
                    handleOnChangeSelectFilter(
                      lsIndustry.find((item) => item.key === value),
                      "industry"
                    )
                  }
                />
                <SelectCustom
                  title={"Company Size"}
                  lsOption={lsCompanySize}
                  value={
                   companySize 
                  }
                  onChange={(value) =>
                    handleOnChangeSelectFilter(
                      lsCompanySize.find((item) => item.key === value),
                      "companySize"
                    )
                  }
                />
                <SelectCustom
                  title={"Market"}
                  lsOption={lsMarket}
                  value={market}
                  onChange={(value) =>
                    handleOnChangeSelectFilter(
                      lsMarket.find((item) => item.key === value),
                      "market"
                    )
                  }
                />
              </div>
              <Button
                className={styles["button-filter"]}
                onClick={handleOnClickFilter}
                style={
                  industry !== 'All' ||
                  companySize  !== 'All' ||
                  market !== 'All'
                    ? { border: "1px solid #5FFE9F" }
                    : {}
                }
              >
                <Image src={filter} alt="Filter" priority />
                <p>Filter</p>
              </Button>
            </Col>
          </Row>
          <div>
            {chunkedData?.map((group, groupIndex) => (
              <div
                key={groupIndex}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                className={styles["case-study-container"]}
              >
                {group.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    imageSrc={item.src}
                    description={item.description}
                    lsValue={item.hashtags}
                    handleOnClickCard={() => handleOnClickCard(item)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </CustomLayout>
    </>
  );
};

export default CaseStudies;
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      overwriteMetaTag: true,
    },
  };
};

