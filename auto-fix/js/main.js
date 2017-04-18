$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ['', ''],
    responsive:{
        1000:{
            items:1
        }
    }
});

$('#pall').on("click", function () {
   if(event.target.id == "pall"){
       closePall();
   }
});
/*MODAL*/
function closePall() {
    $('.modal-pall').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal-pall-conf').css('display', 'none');
    $('.modal-conf').css('display', 'none');
    $('body').css('overflow','auto');
    $('.modal-pall-order').css('display', 'none');
    $('.modal-order').css('display', 'none');
}
$('.close-modal').on("click", function (event) {
    event.preventDefault();
    closePall();
});

$('a.btn-modal-form').click(function() {
    $('.modal-pall').css('display', 'block');
    $('.modal').css('display', 'block');
    $('body').css('overflow','hidden');
});


$('.orderPoor').on('click', function (event) {
    event.preventDefault();
    $('.modal-pall-order').css('display', 'block');
    $('.modal-order').css('display', 'block');
    $('body').css('overflow','hidden');
});

