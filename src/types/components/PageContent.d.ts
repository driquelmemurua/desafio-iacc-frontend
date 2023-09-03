import { ReactNode } from "react"

export type PageContentProps = {
  title: string;
  breadcrumbs: Array<{
    title: string | JSX.Element,
  }>,
  children: ReactNode,
}