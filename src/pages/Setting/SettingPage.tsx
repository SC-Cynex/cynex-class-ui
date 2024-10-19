import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import SettingForm from "./SettingForm";
import styles from "./SettingPage.module.css";

const SettingPage: React.FC = () => {
    return (
        <DefaultFrame title="Configuração">
            <div className={styles.setting}>
                <SettingForm />
            </div>
        </DefaultFrame>
    );
};

export default SettingPage