const botao = document.querySelector("#botaoEntrar");

botao.addEventListener("click", () => {
    logar();
});

function logar () {
    const loginEmail = document.querySelector("#email").value;
    const loginSenha = document.querySelector("#senha").value;

    if(loginEmail == "admin" && loginSenha == "admin") {
        alert('Login realizado com sucesso!');
        location.href = "index.html";
    } else {
        alert('Falha ao fazer login!');
    }
}