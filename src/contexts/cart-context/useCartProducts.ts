/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-31 21:03:01
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-31 21:25:29
 * @FilePath: /shop/src/contexts/cart-context/useCartProducts.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useCartContext } from "./CartContextProvider";

export const useCartProducts = () => {
  const { products, setProducts } = useCartContext();
  const { updateCartTotal } = useCartTotal();
  const updateQuantitySately = (
  )
};
