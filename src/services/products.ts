/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 12:54:50
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 13:10:14
 * @FilePath: /shop/src/services/products.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import axios from "axios";
import { IGetProductsResponse } from "@/models";

const isProduction = process.env.MODE_ENV === "production";

export const getProducts = async () => {
  let response: IGetProductsResponse;
  if (isProduction) {
    response = await axios.get(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
  } else {
    response = require("static/json/products.json");
  }

  const { products } = response.data || [];
  return products;
};
