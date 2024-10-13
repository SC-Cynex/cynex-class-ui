import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import styles from "./ResetPasswordForm.module.css";

type FieldType = {
    email: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = () => {
    // implementar
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    // implementar
};

const ResetPasswordForm: React.FC = () => (
    <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Preencha o campo de email.' }]}
        >
            <Input size='large' placeholder='Informe seu e-mail' style={{ width: '300px'}}/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" size='large' htmlType="submit" block>
                Enviar
            </Button>
            <a 
                className={styles.backLogin}
                href='/login'
            >
                Volte para a tela de login
            </a>
        </Form.Item>
    </Form>
);

export default ResetPasswordForm;