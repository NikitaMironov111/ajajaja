$(document).ready(function(){
    $('.item_img_arrow').click(function(){
        if ($('.toogle_txt').hasClass("toogle")){
            $('.toogle_txt').removeClass("toogle");
        } else {
            $('.toogle_txt').addClass("toogle");
        }
    });
    $('.item_img_arrow_2').click(function(){
        if ($('.toogle_txt_2').hasClass("toogle")){
            $('.toogle_txt_2').removeClass("toogle");
        } else {
            $('.toogle_txt_2').addClass("toogle");
        }
    });
    $('.item_img_arrow_3').click(function(){
        if ($('.toogle_txt_3').hasClass("toogle")){
            $('.toogle_txt_3').removeClass("toogle");
        } else {
            $('.toogle_txt_3').addClass("toogle");
        }
    });
})