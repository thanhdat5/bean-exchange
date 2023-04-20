function setHeaderSticky() {
    if ($(window).scrollTop() >= 100) {
        $('.be-header').addClass('sticky');
    }
    else {
        $('.be-header').removeClass('sticky');
    }
}
function removeMenuMobile() {
    if (window.innerWidth > 992) {
        $('.be-navbar').removeClass('show');
    }
}
$(function () {
    setHeaderSticky();
    removeMenuMobile();
    $('.be-open-menu').on('click', function () {
        $('.be-navbar').addClass('show');
    })
    $('.be-close-menu').on('click', function () {
        $('.be-navbar').removeClass('show');
    })

    $('.be-navbar a').on('click', function () {
        $('.be-navbar').removeClass('show');
    })
})
window.onresize = function () {
    if (window.innerWidth > 992) {
        removeMenuMobile();
    }
}
$(window).scroll(function () {
    setHeaderSticky();
});
window.onload = function () {
    window.setTimeout(() => {
        $('.be-loader').fadeOut(600);
    }, 500)
    $('body').removeClass('overflow-hidden');
    AOS.init();
}