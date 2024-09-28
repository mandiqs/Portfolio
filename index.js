document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Seleciona todas as imagens dos cards dentro da seção de fotografia
    const images = document.querySelectorAll('.card img');

    images.forEach((img) => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

});

// Função para alternar entre os projetos
function showProjects(type) {
    document.getElementById('projetos-ti').style.display = 'none';
    document.getElementById('fotografia').style.display = 'none';
    document.getElementById('design').style.display = 'none';
    document.getElementById(type).style.display = 'grid';

    // Mostra a seção selecionada
    document.getElementById(type).style.display = 'grid';

    // Remove a classe 'active' de todos os botões
    const buttons = document.querySelectorAll('.submenu button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    event.target.classList.add('active');
}

