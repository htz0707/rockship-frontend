"use client";

import React, { useMemo, useEffect } from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "@/context";
import {
  setItemCaseStudy,
  // setCaseStudies,
  setItemFilter,
} from "@/context/actions/case-studies";

import CustomLayout from "@/components/Layout";
import SelectCustom from "@/components/SelectCustom";
import styles from "@/styles/case-studies.module.scss";
import filter from "../../../public/filter.svg";
import { UniqueArray } from "@/utils";
import Card from "@/components/Card";

const CaseStudies = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const caseStudies = useSelector((state) => state?.caseStudies?.caseStudies);
  const itemFilter = useSelector((state) => state?.caseStudies?.itemFilter);

  const lsIndustry = useMemo(() => {
    const arrayTemp = [{ id: 0, key: "all_industry", value: "All" }];
    const industries = caseStudies?.map((item) => {
      return { id: item.id, key: item.industry, value: item.industry };
    });
    const uniqueArray = UniqueArray(industries);
    return [...arrayTemp, ...uniqueArray];
  }, [caseStudies]);

  const lsCompanySize = useMemo(() => {
    const arrayTemp = [{ id: 0, key: "all_company_size", value: "All" }];
    const companySizes = caseStudies?.map((item) => {
      return { id: item.id, key: item.companySize, value: item.companySize };
    });
    const uniqueArray = UniqueArray(companySizes);
    return [...arrayTemp, ...uniqueArray];
  }, [caseStudies]);

  const lsMarket = useMemo(() => {
    const arrayTemp = [{ id: 0, key: "all_market", value: "All" }];
    const markets = caseStudies?.map((item) => {
      return { id: item.id, key: item.market, value: item.market };
    });
    const uniqueArray = UniqueArray(markets);
    return [...arrayTemp, ...uniqueArray];
  }, [caseStudies]);

  const dataFilter = useMemo(() => {
    const all_industry = caseStudies?.filter((item) => item.industry);
    const all_company_size = caseStudies?.filter((item) => item.companySize);
    const all_market = caseStudies?.filter((item) => item.market);
    const all_industry_value = all_industry?.map((item) => item.industry);
    const all_company_size_value = all_industry?.map(
      (item) => item.companySize
    );
    const all_market_value = all_industry?.map((item) => item.market);

    if (itemFilter?.industry?.key === "all_industry") {
      return all_industry;
    }
    if (itemFilter?.companySize?.key === "all_company_size") {
      return all_company_size;
    }
    if (itemFilter?.market?.key === "all_market") {
      return all_market;
    }
    if (all_industry_value?.includes(itemFilter?.industry?.key)) {
      return all_industry?.filter((item) =>
        item.industry?.includes(itemFilter?.industry?.key)
      );
    }
    if (all_company_size_value?.includes(itemFilter?.companySize?.key)) {
      return all_company_size?.filter((item) =>
        item.companySize?.includes(itemFilter?.companySize?.key)
      );
    }
    if (all_market_value?.includes(itemFilter?.market?.key)) {
      return all_market.filter((item) =>
        item.market?.includes(itemFilter?.market?.key)
      );
    }
    return caseStudies;
  }, [caseStudies, itemFilter]);

  const handleOnClickFilter = () => {
    router.push("/case-studies/filter");
  };

  const handleOnClickCard = (item) => {
    router.push(`/case-studies/${item.id}`);
    dispatch(setItemCaseStudy(item));
    localStorage.setItem('itemDetail', JSON.stringify(item))
  };

  const handleOnChangeSelectFilter = (value, type) => {
    dispatch(setItemFilter({ [type]: value }));
  };

  useEffect(() => {
    // dispatch(
    //   setCaseStudies()
    // );
  }, []);

  return (
    <CustomLayout link={"studies"}>
      <div className={styles["case-studies"]}>
        <Row>
          <Col span={24}>
            <h2 className={styles["title"]}>case studies</h2>
            <div className={styles["filter"]}>
              <SelectCustom
                title={"Industry"}
                lsOption={lsIndustry}
                value={itemFilter?.industry?.value || lsIndustry[0].value}
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
                value={itemFilter?.companySize?.value || lsCompanySize[0].value}
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
                value={itemFilter?.market?.value || lsMarket[0].value}
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
                itemFilter?.industry ||
                itemFilter?.companySize ||
                itemFilter?.market
                  ? { border: "1px solid #5FFE9F" }
                  : {}
              }
            >
              <Image src={filter} alt="Filter" priority />
              <p>Filter</p>
            </Button>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          {dataFilter?.map((item, index) => {
            return (
              <Col xs={24} sm={12} md={8} key={item.id || index}>
                <Card
                  title={item.title}
                  imageSrc={item.src}
                  description={item.description}
                  lsValue={item.hashtags}
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
