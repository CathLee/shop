/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 15:07:42
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 15:15:33
 * @FilePath: /shop/src/components/Products/style.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  } ;
`;
