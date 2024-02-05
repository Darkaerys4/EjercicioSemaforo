$(document).ready(function () {
    $(".btn").click(function () {

        $(".Cambio").text("buenos dias");
        console.log("Buenos dias a todos");
    });
    $(".btn-cambio").click(function (e) { 
        e.preventDefault();
        location.href="pruebaRama.html"
    });
});