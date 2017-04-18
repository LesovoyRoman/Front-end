// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    navText: ['', ''],
    responsive:{
        1000:{
            items:1
        }
    }
});


 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


/**************
 * NAVIGATION *
 *************/
$('.nav-wrapper').hide();
$('.nav-btn').click(function () {
    if ($(this).hasClass('close')) {
        $(this).removeClass('close');
        $('.nav-wrapper').fadeOut();
        $('body').css('overflow', 'auto');
    } else {
        $('.nav-wrapper').fadeIn(function () {
            $('body').css('overflow', 'hidden');
        });
        $(this).addClass('close');
    }

       $('.nav-wrapper>ul>li>a').click(function () {
            $('.nav-wrapper').css('display', 'none');
            $('.nav-btn').removeClass('close');
            $('body').css('overflow', 'auto');
        });
        //$('.nav-btn').css('display', 'block');
});


/**********
 * HEADER *
 *********/
window.onload = function () {
    setTopPadding();
    onScroll();
};

window.onresize = function () {
    setTopPadding();
};

var h = document.querySelector("div.top-head-wrap .down-menu .call-button"),
    hHeight;

var t = document.querySelector("div.top-head-wrap"),
    tHeight;    

function setTopPadding() {
    hHeight = h.offsetHeight;
}

function setTopPadding() {
    tHeight = t.offsetHeight;
}

function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
        var y = window.pageYOffset;
        if (y > 150) {
            h.classList.add('scroll');
            $('.down-menu .scroll').css('display', 'block');
        } if (y < 150) {
            h.classList.remove('scroll');
        }

        if (y > 835) {
            t.classList.add("scroll");
        } else {
            t.classList.remove("scroll");
        }
    }
}


/****************
 * ORDER COUNTER *
 ****************/
var dt = new Date();
var count = dt.getHours() * 3 + Math.floor(dt.getMinutes() / 20);
var mem = document.getElementsByClassName('counter')[0].innerHTML = count;
var kek = document.getElementsByClassName("counter")[1].innerHTML = count;


/*SLIDE_DOWN_FEEDBACK*/
var isHidden = true;

function changeState() {

    var divToHide = document.getElementsByClassName('hidden-content');
    var link = document.getElementsByClassName('show-content');

    for (var i = 0; i < divToHide.length; i++) {

        if (isHidden) {
            divToHide[i].style.display = "block";
            link[i].innerHTML = "Скрыть";
        } 

        else {
            divToHide[i].style.display = "none";
            link[i].innerHTML = "Читать полностью";
        }
    }

    isHidden = !isHidden;

}


/*MODAL*/
function closePall() {
    $('.modal-pall').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal-pall-conf').css('display', 'none');
    $('.modal-conf').css('display', 'none');
    $('.modal-pall-conf-binoculus').css('display', 'none');
    $('.modal-conf-binoculus').css('display', 'none');
    $('body').css('overflow','auto');
    $('.modal-pall-feedback').css('display', 'none');
    $('.modal-feedback').css('display', 'none');
    $('.modal-pall-order').css('display', 'none');
    $('.modal-order').css('display', 'none');
}
$('.close-modal').on("click", function (event) {
    event.preventDefault();
    closePall();
});
$('.right-close-pall').on("click", function (event) {
    event.preventDefault();
    closePall();
});
$('.left-close-pall').on("click", function (event) {
    event.preventDefault();
    closePall();
});
$('a.btn-modal-form').click(function() {
    $('.modal-pall').css('display', 'block');
    $('.modal').css('display', 'block');
    $('body').css('overflow','hidden');
});
/*$('.features img').on('click', function () {
    $('.modal-pall-conf').css('display', 'block');
    $('.modal-conf').css('display', 'block');
    $('body').css('overflow','hidden');
});*/
$('.binoculars-photo img').on('click', function () {
    $('.modal-pall-conf-binoculus').css('display', 'block');
    $('.modal-conf-binoculus').css('display', 'block');
    $('body').css('overflow','hidden');
});
$('.leave-feedback').on('click', function (event) {
    event.preventDefault();
    $('.modal-pall-feedback').css('display', 'block');
    $('.modal-feedback').css('display', 'block');
    $('body').css('overflow','hidden');
});
$('.orderPoor').on('click', function (event) {
    event.preventDefault();
    $('.modal-pall-order').css('display', 'block');
    $('.modal-order').css('display', 'block');
    $('body').css('overflow','hidden');
});
$('button').on("click", function (event) {
    closePall();
    event.preventDefault();
});
