/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-31 21:06:49
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-31 21:20:32
 * @FilePath: /shop/src/contexts/cart-context/useCartTotal.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ICartProduct } from "@/models";
import { useCartContext } from "./CartContextProvider";

export const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products: ICartProduct[]) => {
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity;
        return sum;
      },
      0
    );
    //0 是累加的初始值。
    const totalPrice = products.reduce((sum: number, product: ICartProduct) => {
      sum += product.price * product.quantity;
      return sum;
    }, 0);
    const installments = products.reduce(
      (greater: number, product: ICartProduct) => {
        greater =
          product.installments > greater ? product.installments : greater;
        return greater;
      },
      0
    );
    const total = {
      productQuantity,
      installments,
      totalPrice,
      currencyId: "USD",
      currecyFormat: "$",
    };
    setTotal(total);
  };
  return {
    total,
    updateCartTotal,
  };
};
