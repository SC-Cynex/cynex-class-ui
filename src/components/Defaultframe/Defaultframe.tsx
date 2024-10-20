import { ReactNode } from "react";
import { Layout } from "antd";
import HeaderPage from "./Header";
import SiderPage from "./Sider";
import styles from "./Defaultframe.module.css";

interface DefaultFrameProps {
    title?: string
    children: ReactNode;
    breadcrumb?: ReactNode;
}

export default function DefaultFrame({ children, title, breadcrumb }: DefaultFrameProps): JSX.Element {
    return (
        <Layout>
            <SiderPage />
            <Layout>
                <HeaderPage />
                <Layout style={{ marginTop: '104px', marginLeft: '120px', marginRight: '80px' }}>
                    <div className={styles.breadcrumb}>{breadcrumb}</div>
                    {title && <h1 className={styles.title}>{title}</h1>}
                    {children}
                </Layout>
            </Layout>
        </Layout>
    );
}
