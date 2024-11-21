import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { FaUserPlus } from "react-icons/fa6";
import { Breadcrumb } from "antd";
import CoursesGrid from "./CoursesGrid";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaUserPlus/>,
                },
                {
                    href: '',
                    title: 'Inscrição',
                }
            ]}
        />
    );
};

const RegistrationPage: React.FC = () => {
    return (
        <DefaultFrame title="Inscrição" breadcrumb={<BreadcrumbComponent/>}>
            <div>
                <CoursesGrid />
            </div>
        </DefaultFrame>
    );
};

export default RegistrationPage