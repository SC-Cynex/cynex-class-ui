import { message } from "antd";

const actions = {
    inscription: async (value) => {
        try {
            const requestData = {
                class_id: value,
                user_id: parseInt(localStorage.getItem('user_id')),
            };

            const response = await fetch("http://localhost:8080/api/v1/inscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            if (response.ok) {
                message.success(`Inscrição feita com sucesso:`);
                console.log("Inscrição feita com sucesso:", data);
            } else {
                console.error("Erro ao fazer inscrição turma:", data.message);
            }
        } catch (error) {
            console.error("Erro ao enviar dados para o backend:", error);
        }
    },
    getClass: async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/classes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar as inscrições");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro ao buscar as inscrições:", error);
            throw error;
        }
    },
    getClassUser: async () => {
        try {
            const user_id = localStorage.getItem('user_id');
            const response = await fetch(`http://localhost:8080/api/v1/inscription/user?user_id=${user_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar as inscrições");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro ao buscar as inscrições:", error);
            throw error;
        }
    }
};

export default actions;
