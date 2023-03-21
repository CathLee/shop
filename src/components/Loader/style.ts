/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-21 21:20:35
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-21 21:27:35
 * @FilePath: /shop/src/components/Loader/style.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
  width: 64px;
  height: 64px;
  z-index: 10;
  border-radius: 5px;
  background-color: #000;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    border: 6px solid #fff;
    border-radius: 50%;
    border-color: #fff transparent transparent transparent;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
