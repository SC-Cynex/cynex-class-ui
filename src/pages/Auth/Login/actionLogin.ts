export default {
    signIn: (values) => {
        let data = {
            Email: values.email,
            Password: values.password,
        };
        fetch("http://localhost:8080/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                const token = data.data.token;
                const userId = data.data.user_id;
                const roleId = data.data.role_id;

                if (token) {
                    const expires = new Date();
                    expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
                    document.cookie = `token=${token};expires=${expires.toUTCString()};path=/`;

                    localStorage.setItem("token", token);
                    localStorage.setItem("user_id", userId);
                    localStorage.setItem("role_id", roleId);
                    
                    window.location = "/portal";
                }
            })
            .catch(() => {
                
            });
    },
};
