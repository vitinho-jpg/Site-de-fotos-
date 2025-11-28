document.addEventListener('DOMContentLoaded', 
    function() {
    let hamburgerIcon = document.getElementById('icone-menu');
    let sidebar = document.getElementById('side-box');
    let closeBtn = document.getElementById('fechar-aba');
    let overlay = document.getElementById('overlay');


    // Função p abrir o menu
    hamburgerIcon.addEventListener('click', function() {
        sidebar.classList.add('open');
        overlay.style.display = "block";
    });

    // Função p fechar o menu
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.style.display = "none";
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.style.display = "none";
    });
    
    // window.addEventListener('click', function(event) {
    //     if (event.target !== sidebar && event.target !== hamburgerIcon) {
    //         sidebar.classList.remove('open');
    //     }
    // });
});
AOS.init();