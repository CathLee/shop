import { useProducts } from "@/contexts/product-context";
import React from "react";
import * as S from "./style";
/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-21 21:40:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-28 22:18:24
 * @FilePath: /shop/src/components/Filter/Filter.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

const Filter = () => {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];

    filterProducts(filters);
  };

  const createCheckbox = (label: string) => (
    <S.Checkbox label={label} handleOnChange={toggleCheckbox} key={label} />
  );
  const createCheckboxes = () => availableSizes.map(createCheckbox);
  return (
    <S.Container>
      <S.Title>Sizes:</S.Title>
      <div>{createCheckboxes()}</div>
    </S.Container>
  );
};

export default Filter;
