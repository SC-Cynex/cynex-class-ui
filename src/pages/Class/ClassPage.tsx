import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Breadcrumb } from "antd";
import { FaUsers } from "react-icons/fa6";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaUsers/>,
                },
                {
                    href: '',
                    title: 'Turmas',
                }
            ]}
        />
    );
};

const ClassPage: React.FC = () => {
    return (
        <DefaultFrame title="Turmas" breadcrumb={<BreadcrumbComponent/>}>
            <div>
                
            </div>
        </DefaultFrame>
    );
};

export default ClassPage