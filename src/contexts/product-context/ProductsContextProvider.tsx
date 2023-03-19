/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 10:33:15
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 13:21:06
 * @FilePath: /shop/src/contexts/product-context/ProductsContextProvider.tsx
 * @Description: 商品组件
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react'
import { createContext, FC, useContext, useState } from "react";

import { IProduct } from "@/models";

export interface IProductsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  products: IProduct[];
  setProducts(products: IProduct[]): void;
  filters: string[];
  setFilters(filters: string[]): void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);


const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
};

const ProductsProvider: FC = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const ProductContextValue: IProductsContext = {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  };
  return <ProductsContext.Provider value={ProductContextValue} {...props} />;
};

export {ProductsProvider,useProductsContext}