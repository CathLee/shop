/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-21 21:37:46
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-21 21:38:06
 * @FilePath: /shop/src/components/Github/GithubStarButton/GithubStarButton.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from "react";

React;
const StarButton = () => (
  <div className="star-button-container">
    <p>
      <small>Leave a star on Github if this repository was useful :)</small>
    </p>
    <a
      className="github-button"
      href="https://github.com/jeffersonRibeiro/react-shopping-cart"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star jeffersonRibeiro/react-shopping-cart on GitHub"
      tabIndex={-1}
    >
      Star
    </a>
  </div>
);

export default StarButton;
