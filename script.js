// 1. Evento de submit do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de usuário e senha
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Lista de usuários e senhas válidos
    const users = [
        { username: "pks", password: "1234" },
        { username: "patio", password: "1234" },
        { username: "meca", password: "1234" },
        { username: "yb", password: "1234" }
    ];

    // Verifica se o usuário e senha correspondem a algum no array
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // Armazena o nome do usuário no localStorage
        localStorage.setItem("usuarioLogado", username);
        console.log("Usuário salvo no localStorage:", username); // Log para depuração

        // Redireciona para a página introducao.html
        window.location.href = "introducao.html";
    } else {
        // Exibe mensagem de erro se o login falhar
        errorMessage.textContent = "Usuário ou senha incorretos!";
        console.log("Login falhou. Verifique usuário e senha."); // Log para depuração
    }
});

