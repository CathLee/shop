/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-30 22:09:43
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-30 22:13:35
 * @FilePath: /shop/src/utils/formatPrice.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

// toFiexed格式化数字
export const formatPrice = (price: number, currencyId: string): string => {
  switch (currencyId) {
    case "BRL":
      return price.toFixed(2).replace(".", ",");
    default:
      return price.toFixed(2);
  }
};
