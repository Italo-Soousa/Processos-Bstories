document.addEventListener("DOMContentLoaded", () => {
    console.log("login.js carregado");
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        console.log("Formulário enviado");
        e.preventDefault();

        const usuario = document.getElementById("username").value.trim().toLowerCase();
        const senha = document.getElementById("password").value.trim();

        // Simulação de validação de usuário
        const usuarios = [
            { usuario: "vendedor", senha: "123", tipo: "vendas" },
            { usuario: "ecommerce", senha: "123", tipo: "ecommerce" },
            { usuario: "admin", senha: "123", tipo: "admin" },
            { usuario: "administrativo", senha: "123", tipo: "rh" }
        ];

        const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

        if (user) {
            localStorage.setItem("usuarioLogado", user.usuario);

            switch (user.tipo) {
                case "vendas":
                    window.location.href = "./pages/Home/PontoDeVendas.html";
                    break;
                case "ecommerce":
                    window.location.href = "./pages/Home/Ecommerce.html";
                    break;
                case "admin":
                    window.location.href = "./pages/Home/AdminTotal.html";
                    break;
                case "rh":
                    window.location.href = "./pages/Home/Administrativo.html";
                    break;
                default:
                    alert("Tipo de usuário não reconhecido.");
            }
        } else {
            alert("Usuário ou senha inválidos.");
        }

    });
});
