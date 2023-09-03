import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '@/theme/themeConfig';
import { PageLayout } from '@/components/PageLayout';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </ConfigProvider>
);

export default App;