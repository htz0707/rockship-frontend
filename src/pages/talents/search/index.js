"use client";

import React, { useEffect, useState } from "react";
import { Col, Row, Input, Select } from "antd";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import styles from "@/styles/search.module.scss";
import { SearchOutlined } from '@ant-design/icons';
import useWindowSize from "@/hooks/useWindowSize";

const Search = () => {
  const size = useWindowSize();
  const router = useRouter();

  const levelOptions = [
    {
      label: 'All level',
      value: 'All',
    },
    {
      label: 'Fresher',
      value: 'Fresher',
    },
    {
      label: 'Junior',
      value: 'Junior',
    },
    {
      label: 'Middle',
      value: 'Middle',
    },
    {
      label: 'Senior',
      value: 'Senior',
    },
    {
      label: 'Expert',
      value: 'Expert',
    },
  ];

  const industryOptions = [
    {
      label: 'All industry',
      value: 'All',
    },
    {
      label: "Software Development",
      value: 'Software Development'
    },
    {
      label: "Hardware Manufacturing",
      value: "Hardware Manufacturing"
    },
    {
      label: "IT Services",
      value: "IT Services"
    },
    {
      label: "Cloud Computing",
      value: "Cloud Computing"
    },
    {
      label: "Cybersecurity",
      value: "Cybersecurity"
    },
    {
      label: "Technology",
      value: "Technology"
    },
    {
      label: "Healthcare",
      value: "Healthcare"
    },
  ];

  const membersOptions = [
    {
      label: 'All members',
      value: 'All',
    },
    {
      label: 'Front-end',
      value: 'Front-End Developer'
    },
    {
      label: 'Back-end',
      value: 'Back-End Developer'
    },
    {
      label: 'Product',
      value: 'Product Manager'
    },
    {
      label: 'iOS',
      value: 'iOS Developer'
    },
    {
      label: 'Android',
      value: 'Android Developer'
    },
    {
      label: 'DevOps',
      value: 'DevOps Engineer'
    },
    {
      label: 'AI',
      value: 'AI Engineer'
    },
    {
      label: 'Tester',
      value: 'QA/QC Tester'
    },
    {
      label: 'Business Analyst',
      value: 'Business Analyst',
    },
    {
      label: 'Product Designer',
      value: 'Product Designer'
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(levelOptions[0].value);
  const [selectedIndustry, setSelectedIndustry] = useState(industryOptions[0].value);
  const [selectedMember, setSelectedMember] = useState(membersOptions[0].value);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'level':
        localStorage.setItem('level', value);
        setSelectedLevel(value);
        break;
      case 'industry':
        localStorage.setItem('industry', value);
        setSelectedIndustry(value);
        break;
      case 'member':
        localStorage.setItem('member', value);
        setSelectedMember(value);
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    localStorage.setItem('search', event.target.value);
    setSearchQuery(event.target.value);
  };


  useEffect(() => {
    const handleResize = () => {
      if (size.width > 768) {
        router.push('/talents')
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  useEffect(() => {
    setSearchQuery(localStorage.getItem('search') || '');
    setSelectedLevel(localStorage.getItem('level') || levelOptions[0].value)
    setSelectedIndustry(localStorage.getItem('industry') || industryOptions[0].value)
    setSelectedMember(localStorage.getItem('member') || membersOptions[0].value)
  }, []);

  useEffect(() => {
    const clearLocalStorageOnRefresh = () => {
      if (performance.navigation.type === 1) {
        localStorage.clear();
      }
    };

    window.addEventListener('beforeunload', clearLocalStorageOnRefresh);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorageOnRefresh);
    };
  }, []);

  return (
    <CustomLayout link={"search"} isBack>
      <Row>
        <Col span={24}>
          <div className={styles["search"]}>
            <Input
              value={searchQuery}
              prefix={<SearchOutlined />}
              placeholder="Search by name, level, industry,.."
              onChange={handleSearch}
            />
            <Select
              value={selectedLevel}
              options={levelOptions}
              onChange={(value) => handleFilterChange('level', value)}
            />
            <Select
              value={selectedIndustry}
              options={industryOptions}
              onChange={(value) => handleFilterChange('industry', value)}
            />
            <Select
              value={selectedMember}
              options={membersOptions}
              onChange={(value) => handleFilterChange('member', value)}
            />
          </div>
        </Col>
      </Row>
    </CustomLayout>
  );
};

export default Search;
