"use client";

import * as React from "react";
import { Select } from "antd";
import styles from "./select-custom.module.scss";

const SelectCustom = ({
  title = "",
  value = "All",
  lsOption = [{ id: 1, key: "all", value: "All" }],
  className = "",
  onChange,
}) => {
  return (
    <div className={className || styles["select"]}>
      {title && <h5>{title}</h5>}
      <Select value={value} onChange={onChange}>
        {lsOption.map((item) => {
          return (
            <Select.Option key={item.key}>{item.value}</Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectCustom;
