/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-04-01 18:00:57
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-04-01 18:03:55
 * @FilePath: /shop/src/utils/test/test-utils.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@/commons/style/styled-components';
import { theme } from '@/commons/style/theme';

export const renderWithThemeProvider = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
