import { PageContentProps } from "@/types/components/PageContent";
import { Breadcrumb, Layout, Typography } from "antd";

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