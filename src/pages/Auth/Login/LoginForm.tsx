import React from 'react';
import { Button, Form, Input } from 'antd';
import { FaLock, FaUserAlt } from "react-icons/fa";
import styles from "./LoginForm.module.css";
import actions from './actionLogin';

type FieldType = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => (
    <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(values) => actions.signIn(values)}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Preencha o campo de email.' }]}
        >
            <Input size='large' placeholder='Email' prefix={<FaUserAlt style={{ marginRight: 5 }} />} />
        </Form.Item>

        <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Preencha o campo de senha.' }]}
        >
            <Input.Password size='large' placeholder='Senha' prefix={<FaLock style={{ marginRight: 5 }} />} />
        </Form.Item>

        <Form.Item>
            <Button type="primary" size='large' htmlType="submit" block>
                Entrar
            </Button>
            <a 
                className={styles.reset}
                href='/reset-password'
            >
                Esqueceu sua senha?
            </a>
        </Form.Item>
    </Form>
);

export default LoginForm;