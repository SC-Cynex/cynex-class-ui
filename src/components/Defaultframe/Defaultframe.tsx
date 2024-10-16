import { ReactNode } from "react";
import { Layout } from "antd";
import HeaderPage from "./Header";
import SiderPage from "./Sider";
import styles from "./Defaultframe.module.css";

interface DefaultFrameProps {
    title?: string
    children: ReactNode;
}

export default function DefaultFrame({ children, title }: DefaultFrameProps): JSX.Element {
    return (
        <Layout>
            <SiderPage />
            <Layout>
                <HeaderPage />
                <Layout style={{ marginTop: '104px', marginLeft: '120px' }}>
                    {title && <h1 className={styles.title}>{title}</h1>}
                    {children}
                </Layout>
            </Layout>
        </Layout>
    );
}
