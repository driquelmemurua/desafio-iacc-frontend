import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import Link from "next/link";

export default function Courses() {

    return (
        <ConfigProvider theme={theme}>
            <main>
                Cursos
                <Link href='/cursos/1'>Link</Link>
            </main>
        </ConfigProvider>
    )
}