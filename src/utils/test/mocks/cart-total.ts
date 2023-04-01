/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-04-01 18:00:57
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 18:04:15
 * @FilePath: /shop/src/utils/test/mocks/cart-total.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ICartTotal } from '@/models';

const mockTotal: ICartTotal = {
  productQuantity: 1,
  installments: 1,
  totalPrice: 10.9,
  currencyId: 'USD',
  currencyFormat: '$',
};

export default mockTotal;
