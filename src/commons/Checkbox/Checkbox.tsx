/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-23 20:42:40
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-23 20:56:33
 * @FilePath: /shop/src/commons/Checkbox/Checkbox.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import React, { useState } from "react";

interface IProps {
  className?: string;
  label: string;
  handleOnChange(label: string): void;
}
const Checkbox = ({ className, label, handleOnChange }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleOnChange(label);
  };
  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
          data-testid="checkbox"
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};


export default Checkbox;