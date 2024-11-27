import { message } from "antd";

const actions = {
    registerClass: async (values: {
        className: string;
        semester: string;
        teacher: number;
        subject: number;
        week: string;
        course: number;
        period: string;
    }) => {
        try {
            const requestData = {
                name_class: values.className,
                semester: values.semester,
                teacher: values.teacher,
                subject: values.subject,
                day_subject: values.week,
                course: values.course,
                period: values.period,
            };

            const response = await fetch("http://localhost:8080/api/v1/class", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            if (response.ok) {
                message.success(`Turma registrada com sucesso:`);
                console.log("Turma registrada com sucesso:", data);
            } else {
                console.error("Erro ao registrar turma:", data.message);
            }
        } catch (error) {
            console.error("Erro ao enviar dados para o backend:", error);
        }
    },
    getTeacher: async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/auth/users/role?role_id=1`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar as turmas pelo roleId");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro ao buscar as turmas pelo roleId:", error);
            throw error;
        }
    }
};

export default actions;
