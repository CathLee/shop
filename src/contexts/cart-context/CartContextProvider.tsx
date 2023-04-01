/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 13:26:42
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 11:53:51
 * @FilePath: /shop/src/contexts/cart-context/CartContextProvider.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { ReactNode } from "react";
import { ICartProduct, ICartTotal } from "@/models";
import { createContext, FC, useContext, useState } from "react";

export interface ICartContext {
  isOpen: boolean;
  setIsOpen(state: boolean): void;
  products: ICartProduct[];
  setProducts(products: ICartProduct[]): void;
  total: ICartTotal;
  setTotal(products: any): void;
}

interface ICartProviderProps {
  children?: ReactNode;
}

const CartContext = createContext<ICartContext | undefined>(undefined);
const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

const totalInitialValues = {
  productQuantity: 0,
  installments: 0,
  totalPrice: 0,
  currencyId: "USD",
  currencyFormat: "$",
};
const CartProvider: FC<ICartProviderProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

  const CartContextValue: ICartContext = {
    isOpen,
    setIsOpen,
    products,
    setProducts,
    total,
    setTotal,
  };
  return <CartContext.Provider value={CartContextValue} {...props} />;
};

export { CartProvider, useCartContext };
