import { PageContentProps } from "@/types/components/PageContent";
import { Breadcrumb, Layout, Typography } from "antd";
import Head from "next/head";

const { Content } = Layout;
const { Title } = Typography;

export function PageContent({
  breadcrumbs,
  title,
  children,
}: PageContentProps) {
  return (
    <Content style={{
      padding: '0.5rem 2rem',
    }}>
      <Head>
        <title>IACC - {title}</title>
      </Head>
      <Breadcrumb 
        items={breadcrumbs} 
        style={{
          padding: '1rem 0',
        }}/>
      <Title level={2}>
        {title}
      </Title>
      {children}
    </Content>
  )
}