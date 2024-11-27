const actions = {
    getClass: async () => {
        try {
            const user_id = localStorage.getItem("user_id");
            const response = await fetch(`http://localhost:8080/api/v1/classes/user?user_id=${user_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar as turmas");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro ao buscar as turmas:", error);
            throw error;
        }
    },
};

export default actions;
