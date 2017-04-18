/**
 * Created by пк on 22.03.2017.
 */
//modal
function closePall() {
    $('.modal-pall').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal-pall-conf').css('display', 'none');
    $('.modal-conf').css('display', 'none');
    $('body').css('overflow','auto');
}
$('.close-modal').on("click", function () {
   closePall();
});
$('.submit-conf').on("click", function () {
    closePall();
});
$('a.btn-modal-form').click(function() {
    $('.modal-pall').css('display', 'block');
    $('.modal').css('display', 'block');
    $('body').css('overflow','hidden');
});

$('.confidence').on('click', function () {
    $('.modal-pall-conf').css('display', 'block');
    $('.modal-conf').css('display', 'block');
    $('body').css('overflow','hidden');
});
