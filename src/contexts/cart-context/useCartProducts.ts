/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-31 21:03:01
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 11:47:16
 * @FilePath: /shop/src/contexts/cart-context/useCartProducts.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ICartProduct } from "@/models";
import { useCartContext } from "./CartContextProvider";
import { useCartTotal } from "./useCartTotal";

export const useCartProducts = () => {
  const { products, setProducts } = useCartContext();
  const { updateCartTotal } = useCartTotal();
  const updateQuantitySafely = (
    currentProduct: ICartProduct,
    targetProduct: ICartProduct,
    quantity: number
  ): ICartProduct => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: currentProduct.quantity + quantity,
      });
    } else {
      return currentProduct;
    }
  };

  const addProduct = (newProduct: ICartProduct) => {
    let updateProducts;
    const isProductAlreadyInCart = products.some(
      (product: ICartProduct) => newProduct.id === product.id
    );

    if (isProductAlreadyInCart) {
      updateProducts = products.map((product: ICartProduct) => {
        return updateQuantitySafely(product, newProduct, newProduct.quantity);
      });
    } else {
      updateProducts = [...products, newProduct];
    }
    setProducts(updateProducts);
    updateCartTotal(updateProducts);
  };

  const removeProduct = (productToRemove: ICartProduct) => {
    const updateProducts = products.filter((product: ICartProduct) => {
      product.id !== productToRemove.id;
    });
    setProducts(updateProducts);
    updateCartTotal(updateProducts);
  };

  const increaseProductQuantity = (productToIncrease: ICartProduct) => {
    const updateProducts = products.map((product: ICartProduct) => {
      return updateQuantitySafely(product, productToIncrease, +1);
    });
    setProducts(updateProducts);
    updateCartTotal(updateProducts);
  };
  const decreaseProductQuantity = (productToDecrease: ICartProduct) => {
    const updateProducts = products.map((product: ICartProduct) => {
      return updateQuantitySafely(product, productToDecrease, -1);
    });

    setProducts(updateProducts);
    updateCartTotal(updateProducts);
  };

  return {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  };
};
