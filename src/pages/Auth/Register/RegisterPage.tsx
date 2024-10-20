import React from "react";
import DefaultFrame from "../../../components/Defaultframe/Defaultframe";
import RegisterForm from "./RegisterForm";
import styles from "./RegisterPage.module.css";
import { Breadcrumb } from "antd";
import { FaUser } from "react-icons/fa6";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaUser/>,
                },
                {
                    href: '',
                    title: 'Registrar',
                },
                {
                    title: 'Usuário',
                },
            ]}
        />
    );
};

const RegisterPage: React.FC = () => {
    return (
        <DefaultFrame title="Registrar Usuário" breadcrumb={<BreadcrumbComponent/>}>
            <div className={styles.register}>
                <RegisterForm />
            </div>
        </DefaultFrame>
    );
};

export default RegisterPage