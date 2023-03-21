/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-18 20:10:43
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 15:45:18
 * @FilePath: /shop/src/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import "./index.css";
import App from "@/components/App";
import reportWebVitals from "./reportWebVitals";

// Themes

// 引入styled-componet 全局样式
import { theme } from "@/commons/style/theme";
// 引入styled样式依赖组件
import { ThemeProvider } from "@/commons/style/styled-components";

import GlobalStyle from "@/commons/style/global-style";

// Context Provider
import { ProductsProvider } from "./contexts/product-context";
import { CartProvider } from './contexts/cart-context/index';
import * as ReactDOMClient from 'react-dom/client';


const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);
container.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
