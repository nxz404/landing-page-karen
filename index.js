const inputNome = document.getElementById("nameWa");
const botao = document.getElementById("chamarWa");
const retorno = document.getElementById("return")
function chamarWhatsApp() {
    const nomeUsuario = inputNome.value.trim();
    

    if (nomeUsuario === "") {
        retorno.textContent = "Por favor insira um nome válido!"
        return
    }
    const temNumero = /\d/.test(nomeUsuario);

    if (temNumero) {
        retorno.textContent = "O campo nome não pode conter números!"
        return; 
    }

    const numeroTelefone = "553192768-581";
    const mensagem = `Ol%C3%A1%20me%20chamo%20${nomeUsuario},%20vi%20seu%20an%C3%BAncio.%20Gostaria%20de%20saber%20mais%20sobre%20a%20consulta!`;
    
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;
    window.open(url, '_blank');
}