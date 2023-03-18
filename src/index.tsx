/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-18 20:10:43
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-18 22:19:39
 * @FilePath: /shop/src/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 引入styled-componet 全局样式
import { theme } from "@/commons/style/theme";
// 引入styled样式依赖组件
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
