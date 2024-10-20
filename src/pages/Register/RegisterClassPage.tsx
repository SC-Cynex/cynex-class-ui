import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Breadcrumb } from "antd";
import { FaBook } from "react-icons/fa6";

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
                    title: 'Usuário',
                },
            ]}
        />
    );
};

const RegisterClassPage: React.FC = () => {
    return (
        <DefaultFrame title="Registrar Aula"  breadcrumb={<BreadcrumbComponent/>}>
            <div>
                
            </div>
        </DefaultFrame>
    );
};

export default RegisterClassPage