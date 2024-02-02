"use client";

import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import styles from "@/styles/filter.module.scss";
import SelectCustom from "@/components/SelectCustom";
import useWindowSize from "@/hooks/useWindowSize";
import { getLsCompanySize, getLsIndustry, getLsMarket } from "@/pages/api/case-studies";

const Filter = () => {
  const size = useWindowSize();
  const router = useRouter();
  const { industry, companySize, market } = router.query;
  const [lsMarket, setLsMarket] = useState([]);
  const [lsCompanySize, setLsCompanySize] = useState([]);
  const [lsIndustry, setLsIndustry] = useState([]);

  const handleOnClickBack = () => {
    const currentQuery = { ...router.query };
    router.push({
      pathname: "/case-studies",
      query: currentQuery,
    });
  };

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

  useEffect(() => {
    const handleResize = () => {
      if (size.width > 768) {
        const currentQuery = { ...router.query };
        router.push({
          pathname: "/case-studies",
          query: currentQuery,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  useEffect(() => {
    handleGetMarket();
    handleGetIndustry();
    handleGetCompanySize();
  }, []);


  return (
    <CustomLayout link={"filter"} isBack onClickTitle={handleOnClickBack}>
      <Row>
        <Col span={24}>
          <div className={styles["filter"]}>
            <SelectCustom
              className={styles["select"]}
              value={industry === 'All' ? 'All Industry' : industry}
              lsOption={lsIndustry}
              onChange={(value) =>
                handleOnChangeSelectFilter(
                  lsIndustry.find((item) => item.key === value),
                  "industry"
                )
              }
            />
            <SelectCustom
              className={styles["select"]}
              value={companySize === 'All' ? 'All Company Size' : companySize }
              lsOption={lsCompanySize}
              onChange={(value) =>
                handleOnChangeSelectFilter(
                  lsCompanySize.find((item) => item.key === value),
                  "companySize"
                )
              } />
            <SelectCustom
              className={styles["select"]}
              value={market === 'All' ? 'All Market' : market }
              lsOption={lsMarket}
              onChange={(value) =>
                handleOnChangeSelectFilter(
                  lsMarket.find((item) => item.key === value),
                  "market"
                )
              }
            />
          </div>
        </Col>
      </Row>
    </CustomLayout>
  );
};

export default Filter;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      overwriteMetaTag: true,
    },
  };
};
