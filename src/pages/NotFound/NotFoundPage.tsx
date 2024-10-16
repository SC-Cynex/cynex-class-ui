import React from "react";
import { Result } from "antd";
import styles from "./NotFoundPage.module.css";

const NotFound: React.FC = () => {
    return (
        <div className={styles.notFound}>
            <Result
                status="error"
                title="Falha no envio"
                subTitle="Verifique e modifique as informações a seguir antes de reenviar."
                className={styles.result}
            />
        </div>
    );
};

export default NotFound;
