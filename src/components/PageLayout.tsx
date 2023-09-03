import { Layout } from "antd";
import Link from "next/link";
import Image from 'next/image';
import { PageLayoutProps } from "@/types/components/PageLayout";

const { Header } = Layout;

export function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <Layout>
      <Header style={{
        backgroundColor: '#fff',
        height: '100%',
        padding: '0.75rem 2rem 0 2rem',
      }}>
        <Link href='/cursos'>
          <Image src='/iacc-logo.svg' alt='IACC Logo' width={275} height={70}/>
        </Link>
      </Header>
      {children}
    </Layout>
  );
}
