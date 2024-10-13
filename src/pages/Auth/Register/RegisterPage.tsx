import React from "react";
import DefaultFrame from "../../../components/Defaultframe/Defaultframe";
import RegisterForm from "./RegisterForm";
import styles from "./RegisterPage.module.css";

const RegisterPage: React.FC = () => {
    return (
        <DefaultFrame title="Registrar Usuário">
            <div className={styles.register}>
                <RegisterForm/>
            </div>
        </DefaultFrame>
    );
};

export default RegisterPage