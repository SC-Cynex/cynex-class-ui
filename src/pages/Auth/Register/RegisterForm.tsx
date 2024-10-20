import { useState } from 'react';
import { Form, Button, Input, Select, Col, Row } from "antd";
import styles from "./RegisterForm.module.css";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import action from './action';

interface AddressData {
    city: string;
    state: string;
    neighborhood: string;
    street: string;
}

interface RegisterValues {
    name: string;
    email: string;
    user: number;
    password: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    number: string;
}

export default function RegisterForm() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const [addressFieldsDisabled, setAddressFieldsDisabled] = useState<boolean>(true);

    const onSearch = async (value: string) => {
        try {
            setLoading(true);
            const addressData: AddressData = await action.fetchAddress(value);
            form.setFieldsValue({
                city: addressData.city,
                state: addressData.state,
                neighborhood: addressData.neighborhood,
                street: addressData.street,
            });
            setAddressFieldsDisabled(false);
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (_values: RegisterValues) => {
        // Lógica para registrar o usuário
        console.log(_values);
    };

    return (
        
            <Form
                form={form}
                layout='vertical'
                style={{ width: '70vw' }}
                onFinish={handleRegister}
            >
                <div className={styles.formTitle}>
                    <FaUserAlt size={30} />
                    <h2>Dados Gerais</h2>
                </div>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Nome"
                            rules={[{ required: true, message: 'Preencha o campo de nome!' }]}
                            hasFeedback
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Preencha o campo de email!' },
                                { type: "email", message: "Email inválido!" }
                            ]}
                            hasFeedback
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="user"
                            label="Usuário"
                            rules={[{ required: true, message: 'Preencha o campo de usuário!' }]}
                            hasFeedback
                        >
                            <Select
                                size="large"
                                options={[
                                    { label: 'Professor', value: 1 },
                                    { label: 'Aluno', value: 2 }
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="password"
                            label="Senha"
                            rules={[
                                { required: true, message: 'Preencha o campo de senha!' },
                                { min: 6, message: 'A senha deve ter pelo menos 6 caracteres!' }
                            ]}
                            hasFeedback
                        >
                            <Input.Password size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className={styles.formTitle}>
                    <FaMapMarkerAlt size={30} />
                    <h2>Endereço</h2>
                </div>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="cep"
                            label="CEP"
                            rules={[{ required: true, min: 8, message: 'Preencha o campo de CEP!' }]}
                            hasFeedback
                        >
                            <Input.Search
                                onSearch={onSearch}
                                loading={loading}
                                size='large'
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="state"
                            label="Estado"
                            rules={[{ required: true, message: 'Preencha o campo de estado!' }]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="city"
                            label="Cidade"
                            rules={[{ required: true, message: 'Preencha o campo de cidade!' }]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="street"
                            label="Rua"
                            rules={[{ required: true, message: 'Preencha o campo de rua!' }]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="neighborhood"
                            label="Bairro"
                            rules={[{ required: true, message: 'Preencha o campo de bairro!' }]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="number"
                            label="Número"
                            rules={[{ required: true, message: 'Preencha o campo de número!' }]}
                            hasFeedback
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large">Registrar</Button>
                </Form.Item>
            </Form>
    );
}
