/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-04-01 17:58:20
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 17:59:34
 * @FilePath: /shop/src/components/Cart/CartProducts/CartProducts.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ICartProduct } from "@/models";
import React from "react";
import CartProduct from "./CartProduct";
import * as S from "./style";

interface IProps {
  products: ICartProduct[];
}

const CartProducts = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.length ? (
        products.map((p) => <CartProduct product={p} key={p.sku} />)
      ) : (
        <S.CartProductsEmpty>
          Add some products in the cart <br />
          :)
        </S.CartProductsEmpty>
      )}
    </S.Container>
  );
};

export default CartProducts;
