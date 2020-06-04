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