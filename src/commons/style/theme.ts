/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-18 21:25:37
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-18 21:35:24
 * @FilePath: /shop/src/commons/style/theme.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

// 注意这里要保持colors属性和他所在的集合
// 二者名称要一致
export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
}

const colors = {
  primary: "#1b1a20",
  secondary: "#eabf00",
};

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1025px",
};

const theme:StyleClosetTheme = {
    colors,
    breakpoints
}

export {theme}
