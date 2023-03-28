/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 15:07:03
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-28 22:42:33
 * @FilePath: /shop/src/components/Products/Products.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { IProduct } from "@/models";
import React from "react";
import Product from "./Product";
import * as S from "./style";

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.map((p) => (
        <Product product={p} key={p.sku} />
      ))}
    </S.Container>
  );
};

export default Products;
