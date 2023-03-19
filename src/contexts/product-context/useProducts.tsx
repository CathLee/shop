/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 10:33:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 13:18:05
 * @FilePath: /shop/src/contexts/product-context/useProducts.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { IProduct } from "@/models";
import { getProducts } from "@/services/products";
import { useCallback } from "react";
import { useProductsContext } from "./ProductsContextProvider";

const useProducts = () => {
  const {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  } = useProductsContext();

  //由于该函数使用了 useCallback 钩子函数，因此可以缓存该函数的实例，避免在每次渲染组件时都重新创建该函数实例，从而提高组件的性能。同时，该函数依赖了 setIsFetching 和 setProducts 函数，因此在使用 useCallback 钩子函数时需要将这两个函数作为依赖项传递给该函数，以确保当这两个函数发生变化时，fetchProducts 函数会被重新创建。
  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);
      setProducts(products);
    });
  }, [setIsFetching, setProducts]);

  const filterProducts = (filters: string[]) => {
    setIsFetching(true);
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);
      let filteredProducts;
      if (filters && filters.length > 0) {
        filteredProducts = products.filter((p: IProduct) => {
          filters.find((filter: string) => {
            p.availableSizes.find((size: string) => size === filter);
          });
        });
      } else {
        filteredProducts = products;
      }
      setFilters(filters);
      setProducts(filteredProducts);
    });
  };

  return {
    isFetching,
    fetchProducts,
    products,
    filters,
    filterProducts,
  };
};

export default useProducts;