import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Breadcrumb } from "antd";
import { FaRegNewspaper } from "react-icons/fa6";
import NoticeBoard from "./NoticeBoard";
import styles from "./PortalPage.module.css";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaRegNewspaper />,
                },
                {
                    href: '',
                    title: 'Quadro de Avisos',
                }
            ]}
        />
    );
};

const noticeData = [
    {
        id: 1,
        title: "Inscrições abertas!",
        description: "As inscrições para os cursos de 2025 estão abertas até Março.",
        date: "23/11/2024",
    },
    {
        id: 2,
        title: "Recesso escolar",
        description: "O recesso escolar será entre 09 de dezembro á 10 de Fevereiro.",
        date: "10/11/2024",
    },
    {
        id: 3,
        title: "Novo curso disponível",
        description: "Confira o novo curso de Engenharia Ambiental no portal.",
        date: "05/11/2024",
    },
    {
        id: 4,
        title: "Aulas de reforço",
        description: "Aulas de reforço estão disponíveis todas as quintas-feiras às 18h.",
        date: "15/10/2024",
    },
];

const NoticeBoardPage: React.FC = () => {
    return (
        <DefaultFrame title="Quadro de Avisos" breadcrumb={<BreadcrumbComponent />}>
            <div className={styles.background}>
            <NoticeBoard notices={noticeData} />
            </div>
        </DefaultFrame>
    );
};

export default NoticeBoardPage;
