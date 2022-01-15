$(document).ready(function(){
    $('.small-images > img').click(function(){
        $('.small-images > img').removeClass('active');
        $(this).addClass('active');
        $('.main-image > img').attr('src',$(this).attr('src'));
        var color = $(this).attr('data-color');
        $('.text-color h1').text(color).css('color', color);
        $('.right-content button').css('background', color);
        $('body').css('background','linear-gradient(45deg, white 69%, '+color+' 69%')
        $('.right-content h2').text($(this).attr('data-title'));
    });
});