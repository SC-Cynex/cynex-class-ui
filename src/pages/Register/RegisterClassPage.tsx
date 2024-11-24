import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Breadcrumb } from "antd";
import { FaBook } from "react-icons/fa6";
import RegisterForm from "./RegisterForm";
import styles from "./RegisterClassPage.module.css";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaBook/>,
                },
                {
                    href: '',
                    title: 'Registrar',
                },
                {
                    title: 'Aula',
                },
            ]}
        />
    );
};

const RegisterClassPage: React.FC = () => {
    return (
        <DefaultFrame title="Registrar Turma"  breadcrumb={<BreadcrumbComponent/>}>
            <div className={styles.register}>
                <RegisterForm/>
            </div>
        </DefaultFrame>
    );
};

export default RegisterClassPage