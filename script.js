document.addEventListener('DOMContentLoaded', 
    function() {
    const hamburgerIcon = document.getElementById('icone-menu');
    const sidebar = document.getElementById('side-box');
    const closeBtn = document.getElementById('fechar-aba');

    // Função para abrir o menu
    hamburgerIcon.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    // Função para fechar o menu
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target !== sidebar && event.target !== hamburgerIcon) {
            sidebar.classList.remove('open');
        }
    });
});
