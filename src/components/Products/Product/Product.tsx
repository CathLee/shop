/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-28 22:24:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 12:18:26
 * @FilePath: /shop/src/components/Products/Product/Product.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { KeyboardEvent } from "react";


import { IProduct } from "@/models";
    



import * as S from "./style";
import { formatPrice } from "@/utils/formatPrice";
import { useCart } from "@/contexts/cart-context/useCart";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
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

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.code === "Space") {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  return (
    <S.Container onKeyUp={handleAddProductWhenEnter} sku={sku} tabIndex={1}>
      {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}
      <S.Image alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>
        <S.Val>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;
