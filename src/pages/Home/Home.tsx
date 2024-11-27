import React from 'react';
import { Layout, Menu, Typography, Space, Divider } from 'antd';
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/cynex-class.svg";
import classroom from "../../assets/classroom.png";
import styles from './Home.module.css';
import { FaLaptop, FaQuoteLeft, FaUserPlus } from 'react-icons/fa6';
import { formatDate } from '../../utils/dataUtils';
import Course from './components/Course';
import type { MenuProps } from 'antd';

const { Header, Content, Footer } = Layout;
const { Paragraph } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: (
            <a href={localStorage.getItem("token") ? "/portal" : "/login"}>
                Já sou Aluno
            </a>
        ),
        key: 'portal',
        icon: <FaLaptop />
    },
    {
        label: (
            <a href={localStorage.getItem("token") ? "/registration" : "/login"}>
                Inscrever-se em uma turma
            </a>
        ),
        key: 'registration',
        icon: <FaUserPlus />
    },
    {
        label: (
            <a href="https://github.com/SC-Cynex" target='_blank'>
                Contato
            </a>
        ),
        key: 'contact',
        icon: <FaQuoteLeft />
    }
];

const Home: React.FC = () => {
    return (
        <Layout className={styles.container}>
            <Header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo Católica SC" className={styles.logo} />
                </div>

                <div className={styles.menu}>
                    <Menu mode="horizontal" items={items} theme='dark' />
                </div>
            </Header>

            <Content className={styles.mainContent}>
                <div className={styles.imageContainer}>
                    <img src={classroom} className={styles.classroomImage} />
                    <div className={styles.overlay}>
                        <h1 className={styles.welcomeTitle}>Bem Vindo ao CynexClass</h1>
                        <p className={styles.welcomeSubtitle}>Tudo mais fácil para você aprender!</p>
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.serviceItem}>
                        <FaLaptop size={50} />
                        <h3>Entrar como Aluno</h3>
                        <p>Faça o login e acesse suas aulas.</p>
                    </div>

                    <Divider type="vertical" className={styles.divider} />

                    <div className={styles.serviceItem}>
                        <FaUserPlus size={50} />
                        <h3>Inscreva-se</h3>
                        <p>Escolha uma turma e comece a aprender.</p>
                    </div>

                    <Divider type="vertical" className={styles.divider} />

                    <div className={styles.serviceItem}>
                        <FaQuoteLeft size={50} />
                        <h3>Contate-nos</h3>
                        <p>Estamos aqui para ajudar com suas dúvidas.</p>
                    </div>
                </div>

                <div className={styles.courseSection}>
                    <h1 className={styles.courseTitle}>
                        Conheça alguns dos cursos disponíveis para inscrição
                    </h1>
                    <Course />
                </div>

                <div className={styles.footerSection}>
                    <div>
                        <Paragraph>{formatDate()}</Paragraph>
                        <Paragraph>
                            Ainda não acessou o Portal do Aluno da Católica SC?
                            <br />
                            É simples e a gente vai ajudar você.
                        </Paragraph>
                    </div>
                </div>
            </Content>
            <Footer>
                <div>
                    <Space size="large">
                        <a href="https://github.com/SC-Cynex" target="_blank">
                            <FaGithub style={{ fontSize: '24px', color: '#000000' }} />
                        </a>
                        <p>
                            Copyright © | Cynex
                        </p>
                    </Space>
                </div>
            </Footer>
        </Layout>
    );
};

export default Home;
