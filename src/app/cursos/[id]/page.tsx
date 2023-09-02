import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";

export default function CourseDetails({ params }: { params: { id: number }}) {
    return <ConfigProvider theme={theme}>
        <p>ID: {params.id}</p>
    </ConfigProvider>
}