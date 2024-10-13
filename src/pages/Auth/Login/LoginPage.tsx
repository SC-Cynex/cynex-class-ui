import React from "react";
import styles from "./loginPage.module.css"
import logo from "../../../assets/cynex-class.svg"
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <section className={styles.sectionLogin}>
                <h1>Login</h1>
                <LoginForm />
            </section>
            <div className={styles.divider} />
            <section className={styles.sectionWelcome}>
                <img src={logo} alt="Logo" />
                <div className={styles.slogan}>
                    <p>Gerencie seus horários de aulas e turmas de forma prática e eficiente.</p>
                </div>
                <div className={styles.textLogin}>
                    <p>Faça login para começar a organizar suas atividades acadêmicas!</p>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
