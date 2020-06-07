$('nav .fas').on('click', function () {
    $('.fas').toggleClass('off');
    $('nav .content').toggleClass('display-flex, off')
    $('body').toggleClass("active")
})

$('.click1').on('click', function () {
    $('div.art1').addClass('active')
})
$('.click2').on('click', function () {
    $('div.art2').addClass('active')
})
$('.click3').on('click', function () {
    $('div.art3').addClass('active')
})
$('.click4').on('click', function () {
    $('div.art4').addClass('active')
})
$('.click5').on('click', function () {
    $('div.art5').addClass('active')
})
$('.click6').on('click', function () {
    $('div.art6').addClass('active')
})
$('.click7').on('click', function () {
    $('div.art7').addClass('active')
})
$('.click8').on('click', function () {
    $('div.art8').addClass('active')
})
$('.close,.overlay').on('click', function () {
    $('div.read-more').removeClass('active')
    $('.overlay').removeClass("active")
})

const navOffset = $('nav').offset().top;

$(document).on('scroll', function () {
    if ($(window).width() > 960) { //tylko dla szerokich monitorów
        if ($(window).scrollTop() >= navOffset) {
            $("nav").addClass("active");
        } else if ($(window).scrollTop() <= navOffset) {
            $("nav").removeClass("active");
        }
    }
});

$('nav .content-pc button:nth-of-type(1)').on('click', function () {
    $('aside.informations').addClass('active')
})
$('nav .content-pc button:nth-of-type(2)').on('click', function () {
    $('aside.about').addClass('active')
})

$('aside .info').on('click', function () {
    $('aside.informations').removeClass('active')
})
$('aside .about').on('click', function () {
    $('aside.about').removeClass('active')
})