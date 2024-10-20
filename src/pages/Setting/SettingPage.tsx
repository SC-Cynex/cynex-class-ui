import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import SettingForm from "./SettingForm";
import styles from "./SettingPage.module.css";
import { FaGear } from "react-icons/fa6";
import { Breadcrumb } from "antd";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaGear/>,
                },
                {
                    href: '',
                    title: 'Configuração',
                }
            ]}
        />
    );
};

const SettingPage: React.FC = () => {
    return (
        <DefaultFrame title="Configuração" breadcrumb={<BreadcrumbComponent/>}>
            <div className={styles.setting}>
                <SettingForm />
            </div>
        </DefaultFrame>
    );
};

export default SettingPage