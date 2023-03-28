/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-28 22:24:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-28 22:29:11
 * @FilePath: /shop/src/components/Products/Product/Product.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { IProduct } from "@/models";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const {
    sku,
    title,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
  } = product;

  return (
  )
};
