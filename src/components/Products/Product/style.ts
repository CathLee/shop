/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-28 22:24:35
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-30 22:02:26
 * @FilePath: /shop/src/components/Products/Product/style.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";

interface IContainer {
  sku: number | string;
}

interface IImage {
  alt: number | string;
}

export const Image = styled.div<IImage>``;

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Contianer = styled.div<IContainer>`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  ${Image} {
    width: 100%;
    height: 270px;
    position: relative;
    background-image: ${({ sku }) =>
      `url(${require(`static/products/${sku}-1-product.webp`)})`};
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    ::before{
        content:'',
        display:block;
        position:absolute;
        background:#eee;
        width:100%;
        height:100%;
        z-index:-1;
        }
        @media only screen and(min-width:${({ theme: { breakpoints } }) =>
          breakpoints.tablet}){
            height:320px;
        }
    }

    $:hover{
        ${Image}{
            background-image:${({ sku }) =>
              `url(${require(`static/products/${sku}-2-product.webp`)})`};
        }
    }
    ${BuyButton} {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
`;

export const Stopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: default;
  z-index: 1;
`;

export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
  &::before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Price = styled.div`
  height: 60px;

  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;

export const Installment = styled.p`
  margin: 0;
  color: #9c9b9b;
`;
