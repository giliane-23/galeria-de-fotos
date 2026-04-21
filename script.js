const imagens = document.querySelectorAll(".galeria img");
let indiceAtual = 0;

function abrirModal(img) {
    const modal = document.getElementById("modal");
    const imgModal = document.getElementById("imgModal");

    indiceAtual = Array.from(imagens).indexOf(img);
    imgModal.src = img.src;
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function proximaImagem() {
    indiceAtual++;
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    document.getElementById("imgModal").src = imagens[indiceAtual].src;
}

function imagemAnterior() {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }
    document.getElementById("imgModal").src = imagens[indiceAtual].src;
}