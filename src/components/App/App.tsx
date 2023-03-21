/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 14:14:07
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 15:25:49
 * @FilePath: /shop/src/components/App/App.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, Al不不l Rights Reserved.
 */

// import { useProducts } from "@/contexts/product-context";
import React, { useEffect } from "react";
import * as S from "./style";
import Products from '@/components/Products'
import { useProducts } from "@/contexts/product-context";
function App() {
  const { isFetching, products, fetchProducts } = useProducts();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container>
      <S.TwoColumnGrid>
        <S.Side></S.Side>
        <S.Main>
            <S.MainHeader>
            <p>{products?.length} Product(s) found</p>
            </S.MainHeader>
            <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
    </S.Container>
  );
}

export default App;
