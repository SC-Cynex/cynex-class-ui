import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { FaLock, FaUserAlt } from "react-icons/fa";

type FieldType = {
    username: string;
    password: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = () => {
    // implementar
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    // implementar
};

const LoginForm: React.FC = () => (
    <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Preencha o campo de usuário.' }]}
        >
            <Input size='large' placeholder='Usuário' prefix={<FaUserAlt style={{ marginRight: 5 }} />} />
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
        </Form.Item>
    </Form>
);

export default LoginForm;