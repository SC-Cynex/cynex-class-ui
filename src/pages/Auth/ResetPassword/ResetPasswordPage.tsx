import React from "react";
import logo from "../../../assets/cynex-class.svg"
import ResetPasswordForm from "./ResetPasswordForm";
import styles from "./ResetPasswordPage.module.css";

const ResetPasswordPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <section className={styles.sectionLogin}>
                <h1>Redefinir senha</h1>
                <p>Informe seu e-mail para qual deseja redefinir a senha.</p>
                <ResetPasswordForm />
            </section>
            <div className={styles.divider} />
            <section className={styles.sectionWelcome}>
                <img src={logo} alt="Logo" />
                <div className={styles.slogan}>
                    <p>Gerencie seus horários de aulas e turmas de forma prática e eficiente.</p>
                </div>
            </section>
        </div>
    );
};

export default ResetPasswordPage;
