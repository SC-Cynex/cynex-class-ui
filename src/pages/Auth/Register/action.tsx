import { message } from "antd";

interface AddressData {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
}

const action = {
    fetchAddress: async (cep: string): Promise<AddressData> => {
        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await res.json();

            if (data.erro) {
                throw new Error("CEP inválido!");
            }

            return {
                street: data.logradouro,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf,
            };
        } catch (error) {
            console.error("Erro ao buscar endereço:", error);
            throw error;
        }
    },
    createUser: async (userData) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar o usuário');
            }

            message.success(`Usuário criado com sucesso`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao criar o usuário:', error);
            throw error;
        }
    },
};

export default action;