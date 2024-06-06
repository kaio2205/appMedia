//* @ author Kaio Eduardo


let nota1, nota2, nota3, nota4, media
let p = document.getElementById('mensagemMedia')


function calcular() {
    nota1 = Number(frmMedia.txtnota1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtnota2.value.replace(",", "."))
    nota3 = Number(frmMedia.txtnota3.value.replace(",", "."))
    nota4 = Number(frmMedia.txtnota4.value.replace(",", "."))


    const resultado = (nota1 + nota2 + nota3 + nota4) / 4
    const mensagemElement = document.getElementById('mensagemMedia');

    if (frmMedia.txtnota1.value === "") {

    } else if (frmMedia.txtnota2.value === "") {

    } else if (frmMedia.txtnota3.value === "") {

    } else if (frmMedia.txtnota4.value === "") {

    } else {
        if (resultado < 4) {
            document.getElementById('status').src = "./img/aluno_reprovado.png"
            mensagemElement.textContent = `A média do aluno foi ${resultado}, ele está reprovado):`;

        } else if (resultado >= 7) {
            document.getElementById('status').src = "./img/aprovado.png"
            mensagemElement.textContent = `A média do aluno foi ${resultado}, ele está aprovado`;

        } else {
            document.getElementById('status').src = "./img/recuperaçao.jpeg"
            mensagemElement.textContent = `A média do aluno foi ${resultado}, ele está de recuperação`;

        }
    }


}

function limparCampos() {
    document.getElementById('status').src = "./img/calculadora.jpeg"
    document.getElementById("mensagemMedia").textContent=""
}
