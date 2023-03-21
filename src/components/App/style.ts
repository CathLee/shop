/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-19 14:14:13
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-19 15:00:40
 * @FilePath: /shop/src/components/App/style.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";

export const Container = styled.div``;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 1fr 4fr;
    margin-top: 80px;
  } ;
`;

export const Side = styled.div`
  display: grid;
  justify-content: center;ICartProduct
  padding: 15px;
  box-sizeing: border-box;
  @media only screen and(min-width:${({ theme: { breakpoints } }) =>
    breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
`;
