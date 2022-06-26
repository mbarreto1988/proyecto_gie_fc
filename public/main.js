const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');

    if (navMenu.classList.contains('nav-menu_visible')) {
        navToggle.setAttribute('aria-label', 'Cerrar Menú');
    } else {
        navToggle.setAttribute.apply('aria-label', 'Abrir Menú');
    }
});

$(document).ready(function () {
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function () {
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        //console.log(activeTab);
        $(activeTab).show();
        return false;
    });
});