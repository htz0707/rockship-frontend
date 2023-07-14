"use client";

import * as React from "react";
import { Select } from "antd";
import styles from "./select-custom.module.scss";

const SelectCustom = ({
  title = "",
  value = "All",
  lsOption = [{ id: 1, name: "All" }],
  className = "",
}) => {
  return (
    <div className={className || styles["select"]}>
      {title && <h5>{title}</h5>}
      <Select value={value}>
        {lsOption.map((item, index) => {
          return (
            <Select.Option key={item.id || index}>{item.name}</Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectCustom;
