/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 15:07:03
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 15:25:03
 * @FilePath: /shop/src/components/Products/Products.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { IProduct } from "@/models";
import React from "react";
import * as S from "./style";

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.map((p) => (
        <h1 key={p.title}>{p.title}</h1>
      ))}
    </S.Container>
  );
};

export default Products;
