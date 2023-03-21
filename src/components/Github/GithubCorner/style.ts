/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-21 21:32:18
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-21 21:32:24
 * @FilePath: /shop/src/components/Github/GithubCorner/style.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components/macro";

export const OctoArm = styled.path``;

export const Container = styled.a`
  &:hover ${OctoArm} {
    animation: octocat-wave 560ms ease-in-out;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover ${OctoArm} {
      animation: none;
    }
    .github-corner ${OctoArm} {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;
