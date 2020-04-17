function HtmlJsChatInit(holder) {
    var html = "<div class=\"holder-html-chat\" >"
        + "<div class=\"html-chat-js-header\" id = \"header\" >"
        + "<div class=\"row\" >"
        + "<div class=\"col-xs-1 col-sm-1 col-md-1\">"
        + "<img src= \"https://d.radikal.ru/d36/1909/d9/419ab5155455.png\" class=\"status-round\" >"
        + "</div>"
        + "<div class=\"col-xs-6 col-sm-6 col-md-6\">"
        + "<p  class=\"network-status\">Status</p>"
        + "</div>"
        + "</div>"
        + "</div>"
        + "<div class=\"html-chat-js-header\" id = \"header\" >"
        + "<div class=\"row\" >"
        + "<div class=\"col-xs-3 col-sm-3 col-md-3\">"
        + "<img src= \"https://c.radikal.ru/c22/1908/b7/6658472dda35.png\" class=\"avatar-round\" >"
        + "</div>"
        + "<div class=\"col-xs-6 col-sm-6 col-md-6\">"
        + "<p class=\"round3\">Harry Potter</p>"
        + "</div>"
        + "</div>"
        + "</div>"
        + "<section id = \"sec\" >"
        + "<div id=\"parent2\"></div>"
        + "</section >"
        + "<div class=\"html-chat-js-button-holder\">"
        + "</div>"
        + "<div class=\"row\" >"
        + "<div class=\"col-xs-9 col-sm-9 col-md-9\">"
        + "<input type=\"text\" id=\"messageInput\" class=\"form-control form-control-lg chat-input\"  placeholder=\"Message text :)\" >"
        + "</div>"
        + "<div class=\"col-xs-3 col-sm-3 col-md-3\">"
        + "<input  class=\"btn btn-primary input-button\" type = \"button\" id = \"sendButton\" value = \"Ok\" >"
        + "</div>"
        + "</div>"
        + " <div class=\"html-chat-js-answer\"  ><a href=\"https://github.com/MarkelovvWeb\" id=\"answer\" target='__blank' >MarkelovvWeb</a></div>"
        + "</div>";
    $(holder).html(html);
}

$(document).ready(function () {
    // Starting chat. Transfer div element where chat window will be created.
    HtmlJsChatInit($("#html-chat"))


    //Анимация
    $('.html-chat-js-header').click(
        function () {
            var heihei = $('.holder-html-chat').height();

            if ($(document).width() < 765) {
                $('.holder-html-chat').animate({ 'margin-right': '80px', 'width': '300' }, 600);
                $('.html-chat-js-header').animate({ 'width': '280' }, 600);
                $('.network-status').animate({ 'margin-left': '3px' }, 600);
            }

            if (heihei == 478) {
                $('.holder-html-chat').animate({ 'margin-bottom': '0', 'height': '60' }, 600);
                if ($(document).width() < 765) {
                    $('.holder-html-chat').animate({ 'width': '60px', 'margin-right': '0' }, 600);
                    $('.network-status').animate({ 'margin-left': '9px' }, 600);
                    $('.html-chat-js-header').delay(600).animate({ 'width': '37px' }, 600);
                }
            }
            if (heihei != 478) {
                $('.holder-html-chat').animate({ 'margin-bottom': '200', 'height': '500' }, 600);
            }
            console.log(heihei);
        }
    );
});