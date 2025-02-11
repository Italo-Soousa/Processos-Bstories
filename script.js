document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

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
        window.location.href = "introducao.html"; // Redireciona para outra página (se necessário)
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});
