/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-04-01 17:58:20
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 18:06:27
 * @FilePath: /shop/src/components/Cart/CartProducts/CartProduct/CartProduct.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ICartProduct } from "@/models";

import * as S from "./style";
import React from "react";
import { useCart } from "@/contexts/cart-context/useCart";
import { formatPrice } from "@/utils/formatPrice";

interface IProps {
  product: ICartProduct;
}
const CartProduct = ({ product }: IProps) => {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  const {
    sku,
    title,
    price,
    style,
    currencyId,
    currencyFormat,
    availableSizes,
    quantity,
  } = product;

  const handleRemoveProduct = () => removeProduct(product);
  const handleIncreaseProductQuantity = () => increaseProductQuantity(product);
  const handleDecreaseProductQuantity = () => decreaseProductQuantity(product);

  return (
    <S.Container>
      <S.DeleteButton
        onClick={handleRemoveProduct}
        title="remove product from cart"
      />
      <S.Image
        src={require(`src/static/products/${sku}-1-cart.webp`)}
        alt={title}
      />
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Desc>
          {`${availableSizes[0]} | ${style}`} <br />
          Quantity: {quantity}
        </S.Desc>
      </S.Details>
      <S.Price>
        <p>{`${currencyFormat}  ${formatPrice(price, currencyId)}`}</p>
        <div>
          <S.ChangeQuantity
            onClick={handleDecreaseProductQuantity}
            disabled={quantity === 1 ? true : false}
          >
            -
          </S.ChangeQuantity>
          <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>
            +
          </S.ChangeQuantity>
        </div>
      </S.Price>
    </S.Container>
  );
};

export default CartProduct;
