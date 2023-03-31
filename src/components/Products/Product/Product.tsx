/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-28 22:24:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-31 20:57:42
 * @FilePath: /shop/src/components/Products/Product/Product.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { IProduct } from "@/models";
import React from "react";
import * as S from "./style";
import { formatPrice } from "@/utils/formatPrice";
interface IProps {
  product: IProduct;
}

export const Product = ({ product }: IProps) => {
  const {
    sku,
    title,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
  } = product;

  const formattedPrice = formatPrice(price, currencyId);
  let productInstallment;
  if (installments) {
    const installmentPrice = price / installments;
    productInstallment = (
      <S.Installment>
        <span>or {installments} x</span>
        <b>
          {currencyFormat}
          {formatPrice(installmentPrice, currencyId)}
        </b>
      </S.Installment>
    );
  }

  const handleAddProduct = () => {};

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.code === "Space") {
    }
  };

  return (
    <S.Contianer onKeyUp={handleAddProductWhenEnter} tabIndex={1} sku={sku}>
      {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}
      <S.Title>{title}</S.Title>
      <S.Price>
        <S.Val>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(0, formattedPrice.length - 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}></S.BuyButton>
    </S.Contianer>
  );
};
