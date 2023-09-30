import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import styles from "./add-feature.module.scss";

const AddFeature = ({ setStep }) => {
  const [featureTypes, setFeatureTypes] = useState([
    {
      data: "",
      featureName: [
        {
          data: "",
        },
      ],
    },
  ]);

  const handleAddFeatureTypes = () => {
    setFeatureTypes((prevFeatureTypes) => [
      ...prevFeatureTypes,
      {
        data: "",
        featureName: [
          {
            data: "",
          },
        ],
      },
    ]);
  };

  const handleDeleteFeatureTypes = (index) => {
    setFeatureTypes((prevFeatureTypes) => {
      const newFeatureTypes = [...prevFeatureTypes];
      newFeatureTypes.splice(index, 1);
      return newFeatureTypes;
    });
  };

  const handleDeleteFeatureName = (typeIndex, nameIndex) => {
    setFeatureTypes((prevFeatureTypes) => {
      const newFeatureTypes = [...prevFeatureTypes];
      newFeatureTypes[typeIndex].featureName.splice(nameIndex, 1);
      return newFeatureTypes;
    });
  };

  const handleAddFeatureName = (index) => {
    setFeatureTypes((prevFeatureTypes) => {
      const newFeatureTypes = [...prevFeatureTypes];
      newFeatureTypes[index].featureName.push({
        data: "",
      });
      return newFeatureTypes;
    });
  };

  return (
    <div className={styles["add-feature"]}>
      <div className={styles["header"]} onClick={() => setStep(0)}>
        <img src="/arrow-left-2.svg" alt="" />
        <p>Add your feature</p>
      </div>
      <div className={styles["container"]}>
        {featureTypes.length > 0 &&
          featureTypes.map((item, index) => {
            return (
              <Row key={index}>
                <Col style={{ marginBottom: 10 }} span={12}>
                  <div className={styles["group-input"]}>
                    <p className={styles["feature-type"]}>Feature type</p>
                    <div className={styles["custom-input"]}>
                      <Input defaultValue={item.name} />
                      {featureTypes.length > 1 && (
                        <img
                          src="/delete.svg"
                          onClick={() => handleDeleteFeatureTypes(index)}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  {index === featureTypes.length - 1 && (
                    <div
                      className={styles["add-btn"]}
                      onClick={handleAddFeatureTypes}
                    >
                      + Add
                    </div>
                  )}
                </Col>
                <Col style={{ marginBottom: 10 }} span={12}>
                  {item.featureName.length === 0 && (
                    <div className={styles["empty-div"]}></div>
                  )}
                  {item.featureName.length > 0 &&
                    item.featureName.map(
                      (featureNameItem, featureNameIndex) => {
                        return (
                          <>
                            <div className={styles["group-input"]}>
                              <p className={styles["feature-type"]}>
                                Feature name
                              </p>
                              <div className={styles["custom-input"]}>
                                <Input defaultValue={featureNameItem.name} />
                                <img
                                  src="/delete.svg"
                                  onClick={() =>
                                    handleDeleteFeatureName(
                                      index,
                                      featureNameIndex
                                    )
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                            {featureNameIndex ===
                              item.featureName.length - 1 && (
                              <div
                                className={styles["add-btn"]}
                                onClick={() => handleAddFeatureName(index)}
                              >
                                + Add
                              </div>
                            )}
                          </>
                        );
                      }
                    )}
                  {item.featureName.length === 0 && (
                    <div
                      className={styles["add-btn"]}
                      onClick={() => handleAddFeatureName(index)}
                    >
                      + Add
                    </div>
                  )}
                </Col>
              </Row>
            );
          })}
      </div>

      <div className={styles["bottom-bar"]}>
        <div className={styles["right"]} onClick={() => setStep(1)}>
          <span>Schedule a demo</span>
        </div>
      </div>
    </div>
  );
};

export default AddFeature;
