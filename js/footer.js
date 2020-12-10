//load css
$(document).ready(function(){
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "../css/footer.css"
    }).appendTo("head");

 //load html
    $(function(){
        $('#footer').load('../html/footer.html');
    });
});