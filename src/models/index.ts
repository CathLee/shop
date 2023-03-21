/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 10:38:51
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 13:52:21
 * @FilePath: /shop/src/models/index.ts
 * @Description: interface集合
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export interface IProduct {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: string[];
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}

// 购物车模型
export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  installments: number;
  totalPrice: number;
  currencyId: string;
  currencyFormat: string;
}

