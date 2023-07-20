"use client";

import React, { useEffect, useMemo } from "react";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import styles from "@/styles/filter.module.scss";
import SelectCustom from "@/components/SelectCustom";
import useWindowSize from "@/hooks/useWindowSize";
import { useSelector, useDispatch } from "@/context";
import { setItemFilter } from "@/context/actions/case-studies";
import { UniqueArray } from "@/utils";

const Filter = () => {
  const size = useWindowSize();
  const router = useRouter();
  const dispatch = useDispatch();
  const caseStudies = useSelector((state) => state?.caseStudies?.caseStudies);
  const itemFilter = useSelector((state) => state?.caseStudies?.itemFilter);

  const lsIndustry = useMemo(() => {
    const arrayTemp = [{ id: 0, key: "all_industry", value: "All Industry" }];
    const industries = caseStudies?.map((item) => {
      return { id: item.id, key: item.industry, value: item.industry };
    });
    const uniqueArray = UniqueArray(industries);
    return [...arrayTemp, ...uniqueArray];
  }, [caseStudies]);

  const lsCompanySize = useMemo(() => {
    const arrayTemp = [
      { id: 0, key: "all_company_size", value: "All Company Size" },
    ];
    const companySizes = caseStudies?.map((item) => {
      return { id: item.id, key: item.companySize, value: item.companySize };
    });
    const uniqueArray = UniqueArray(companySizes);
    return [...arrayTemp, ...uniqueArray];
  }, [caseStudies]);

  const lsMarket = useMemo(() => {
    const arrayTemp = [{ id: 0, key: "all_market", value: "All Market" }];
    const markets = caseStudies?.map((item) => {
      return { id: item.id, key: item.market, value: item.market };
    });
    const uniqueArray = UniqueArray(markets);
    return [...arrayTemp, ...uniqueArray];
  }, [caseStudies]);

  const handleOnChangeSelectFilter = (value, type) => {
    dispatch(setItemFilter({ [type]: value }));
  };

  useEffect(() => {
    const handleResize = () => {
      if (size.width > 768) {
        router.push("/case-studies");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  return (
    <CustomLayout link={"filter"} isBack>
      <Row>
        <Col span={24}>
          <div className={styles["filter"]}>
            <SelectCustom
              className={styles["select"]}
              value={itemFilter?.industry?.value || lsIndustry[0].value}
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
              value={itemFilter?.companySize?.value || lsCompanySize[0].value}
              lsOption={lsCompanySize}
              onChange={(value) =>
                handleOnChangeSelectFilter(
                  lsCompanySize.find((item) => item.key === value),
                  "companySize"
                )
              }            />
            <SelectCustom
              className={styles["select"]}
              value={itemFilter?.market?.value || lsMarket[0].value}
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
