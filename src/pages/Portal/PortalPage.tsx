import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import styles from "./PortalPage.module.css";
import Course from "../Home/components/Course";
import { Breadcrumb } from "antd";
import { FaLaptop } from "react-icons/fa";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaLaptop/>,
                },
                {
                    href: '',
                    title: 'Portal',
                }
            ]}
        />
    );
};

const PortalPage: React.FC = () => {
    return (
        <DefaultFrame breadcrumb={<BreadcrumbComponent/>}>
            <div>
                <div className={styles.courseSection}>
                    <h1 className={styles.courseTitle}>
                        Conheça alguns dos cursos disponíveis para inscrição
                    </h1>
                    <Course />
                </div>
            </div>
        </DefaultFrame>
    );
};

export default PortalPage;