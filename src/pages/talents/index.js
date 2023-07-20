import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Select, Input, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from 'next/router';

import CustomLayout from "@/components/Layout";
import styles from "@/styles/talents.module.scss";

const selectStyle = {
  width: '100%',
}

const MemberCard = ({
  item,
  index,
  handleSelect,
  setOpenMemberDetails,
  setSelectedIndex,
}) => {
  return (
    <div
      className={styles['member-card'] +
        (item.selected ? ' ' + styles['selected'] : '')
      }
      onClick={() => handleSelect(item, index)}
    >
      <Row>
        <Col span={24}>
          <div>
            <img
              src={item?.avatar}
            />
          </div>
          <h2 className={styles['card-title']}>
            {item?.memberType}
          </h2>
          <Row gutter={12}>
            <Col className={styles['col-content']} span={8}>
              <p>YoE</p>
              <h2>{item?.yoe}+</h2>
            </Col>
            <Col className={styles['col-content']} span={8}>
              <p>Projects</p>
              <h2>{item?.projects}+</h2>
            </Col>
            <Col className={styles['col-content']} span={8}>
              <p>Based</p>
              <div>
                <img src={item?.base}></img>
              </div>
            </Col>
          </Row>
          <div className={styles['tags']}>
            {item?.tags.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
          <div
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex(index)
              setOpenMemberDetails(true);
            }}
            className={styles['view-button']}
          >
            View profile
          </div>
        </Col>
      </Row>
    </div>
  )
}

const Talents = () => {
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

  const dataList = [
    {
      id: 0,
      name: 'member 0',
      yoe: 5,
      projects: 5,
      base: './vn.svg',
      avatar: './fe.svg',
      tags: [
        'E-commerce',
        'SaaS',
        'Blockchain'
      ],
      level: 'Senior',
      industry: 'Software Development',
      memberType: 'Front-End Developer',
      selected: false
    },
    {
      id: 1,
      name: 'member 1',
      yoe: 2,
      projects: 9,
      base: './vn.svg',
      avatar: './be.svg',
      tags: [
        'E-commerce',
        'SaaS',
        'Blockchain'
      ],
      level: 'Junior',
      industry: 'Software Development',
      memberType: 'Back-End Developer',
      selected: false
    },
    {
      id: 2,
      name: 'member 2',
      yoe: 3,
      projects: 5,
      base: './vn.svg',
      avatar: './ios.svg',
      tags: [
        'E-commerce',
        'SaaS',
        'Blockchain'
      ],
      level: 'Middle',
      industry: 'Software Development',
      memberType: 'iOS Developer',
      selected: false
    },
    {
      id: 3,
      name: 'member 3',
      yoe: 5,
      projects: 6,
      base: './vn.svg',
      avatar: './ba.svg',
      tags: [
        'E-commerce',
        'SaaS',
        'Blockchain'
      ],
      level: 'Senior',
      industry: 'Software Development',
      memberType: 'Business Analyst',
      selected: false
    },
    {
      id: 4,
      name: 'member 4',
      yoe: 1,
      projects: 2,
      base: './vn.svg',
      avatar: './qa.svg',
      tags: [
        'E-commerce',
        'SaaS',
        'Blockchain'
      ],
      level: 'Junior',
      industry: 'Software Development',
      memberType: 'QA/QC Tester',
      selected: false
    },
    {
      id: 5,
      name: 'member 5',
      yoe: 3,
      projects: 5,
      base: './vn.svg',
      avatar: './and.svg',
      tags: [
        'E-commerce',
        'SaaS',
        'Blockchain'
      ],
      level: 'Middle',
      industry: 'Software Development',
      memberType: 'Android Developer',
      selected: false
    },
  ];

  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(data.reduce((count, item) => count + (item.selected ? 1 : 0), 0));
  const [openMemberDetails, setOpenMemberDetails] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(levelOptions[0].value);
  const [selectedIndustry, setSelectedIndustry] = useState(industryOptions[0].value);
  const [selectedMember, setSelectedMember] = useState(membersOptions[0].value);

  const size = useWindowSize();

  const handleSearch = (event) => {
    localStorage.setItem('search', event.target.value);
    setSearchQuery(event.target.value);
  };

  const isMatched = (member) => {
    const query = searchQuery.toLowerCase();
    return (
      // member.name.toLowerCase().includes(query) ||
      member.yoe.toString().includes(query) ||
      member.projects.toString().includes(query) ||
      member.memberType.toLowerCase().includes(query) ||
      member.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  };

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


  const handleSelect = (member, index) => {
    const list = data.map((item) => {
      if (item.id === index) {
        return { ...item, selected: !member.selected };
      }
      return item;
    });
    setSelectedNumber(list.reduce((count, item) => count + (item.selected ? 1 : 0), 0));
    setData(list);
  }

  useEffect(() => {
    const handleResize = () => {
      if (size.width > 768) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  useEffect(() => {
    setData(dataList);
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
    <CustomLayout link={"talents"} selectedNumber={selectedNumber}>
      <div className={styles["talents"]}>
        <Row>
          <Col span={24}>
            <h2 className={styles["title"]}>ENGINEERING PROFILES</h2>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Input
                  prefix={<SearchOutlined />}
                  value={searchQuery}
                  placeholder="Search by name, level, industry,.."
                  onClick={() => {
                    if (size.width <= 768) {
                      router.push('/talents/search');
                    }
                  }}
                  onChange={handleSearch}
                />
              </Col>
              {
                hidden &&
                <Col span={4}>
                  <Select
                    value={selectedLevel}
                    options={levelOptions}
                    style={selectStyle}
                    onChange={(value) => {
                      handleFilterChange('level', value)
                    }}
                  />
                </Col>
              }
              {
                hidden &&
                <Col span={4}>
                  <Select
                    value={selectedIndustry}
                    options={industryOptions}
                    style={selectStyle}
                    onChange={(value) => handleFilterChange('industry', value)}
                  />
                </Col>
              }
              {
                hidden &&
                <Col span={4}>
                  <Select
                    value={selectedMember}
                    options={membersOptions}
                    style={selectStyle}
                    onChange={(value) => handleFilterChange('member', value)}
                  />
                </Col>
              }
            </Row>
            <Row gutter={60} className={styles['member-card-container']}>
              {data
                .filter((member) => {
                  return (
                    isMatched(member) &&
                    (selectedLevel === 'All' || member.level === selectedLevel) &&
                    (selectedIndustry === 'All' || member.industry === selectedIndustry) &&
                    (selectedMember === 'All' || member.memberType === selectedMember)
                  );
                })
                .map((item, index) => {
                  return (
                    <Col key={index} className={styles['col-card']} xs={12} sm={12} md={12} lg={12} xl={8}>
                      <MemberCard
                        item={item}
                        index={index}
                        handleSelect={handleSelect}
                        setOpenMemberDetails={setOpenMemberDetails}
                        setSelectedIndex={setSelectedIndex}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </div >
      <Modal
        centered
        open={openMemberDetails}
        onCancel={() => setOpenMemberDetails(false)}
        footer={null}
        width={375}
      >
        <div className={styles['member-modal']}>
          <div>
            <img src={data[selectedIndex]?.avatar} />
          </div>
          <h2>Front-end Developer</h2>
          <Row gutter={12}>
            <Col className={styles['col-content']} span={8}>
              <div className={styles['box']}>
                <p>YoE</p>
                <h2>{data[selectedIndex]?.yoe}+</h2>
              </div>
            </Col>
            <Col className={styles['col-content']} span={8}>
              <div className={styles['box']}>
                <p>Projects</p>
                <h2>{data[selectedIndex]?.projects}+</h2>
              </div>
            </Col>
            <Col className={styles['col-content']} span={8}>
              <div className={styles['box']}>
                <p>Based</p>
                <div>
                  <img src={data[selectedIndex]?.base}></img>
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles['info']}>
            <div className={styles['info-header']}>
              <img src='medal.svg' />
              <h2>Achievement</h2>
            </div>
            <div className={styles['info-content']}>
              <p>Dedicate to launching a huge project with over 1000+ users after a year</p>
            </div>
          </div>
          <div className={styles['info']}>
            <div className={styles['info-header']}>
              <img src='code.svg' />
              <h2>Skills</h2>
            </div>
            <div className={styles['info-content']}>
              <div className={styles['skill-list']}>
                <p className={styles['skill-item']}><span>1 year</span> - Work with React</p>
                <p className={styles['skill-item']}><span>2 years</span> - Work with Next JS</p>
              </div>
            </div>
          </div>
          <div className={styles['info']}>
            <div className={styles['info-header']}>
              <img src='target-2.svg' />
              <h2>Industry</h2>
            </div>
            <div className={styles['info-content']}>
              <div className={styles['tags']}>
                <p>Loyalty</p>
                <p>Finance</p>
                <p>Real Estate</p>
              </div>
            </div>
          </div>
          <div className={styles['info']}>
            <div className={styles['info-header']}>
              <img src='certificate.svg' />
              <h2>Certificate</h2>
            </div>
            <div className={styles['info-content']}>
              <div className={styles['skill-list']}>
                <p className={styles['skill-item']}>Bachelor’s Degree</p>
                <p className={styles['skill-item']}>UDemy - FE certificate</p>
              </div>
            </div>
          </div>
          <div>
            <Button className={styles['choose-btn']}>Choose</Button>
          </div>
        </div>
      </Modal>
    </CustomLayout >
  );
};

export default Talents;
