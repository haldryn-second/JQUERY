$(document).ready(function() {

    /////////////////////////////////EJ1/////////////////////////////////

    $(".caja1").click(function() { alert("TEXTO DEL PRIMER CUADRADO"); });
    $(".caja2").dblclick(function() { $(".caja2").hide() });
    $(".caja3").mouseenter(function() { $(".caja3").fadeOut(5000) });
    $(".caja4").mouseleave(function() { $(".caja4").css("background-color", "brown"); });
    $(".caja5").hover(function() { $(".caja5").css("color", "yellow"); });
    $(".caja5").mouseleave(function() { $(".caja5").css("color", "orange"); });
    $(".caja6").mousedown(function() { $(".caja6").html("pulsado") });
    $(".caja7").mouseup(function() { $(".caja7").html("soltado") });

    /////////////////////////////////EJ2/////////////////////////////////

    $("#b1").click(function() { $(".caja1").slideUp(300) });
    $("#b2").click(function() { $(".caja1").slideDown(300) });
    $("#b3").click(function() { $(".caja1").slideToggle(300) });
    $("#b4").click(function() { $(".caja1").fadeOut(300) });
    $("#b5").click(function() { $(".caja1").css("background-color", "green"); });
    $("#b5").mouseenter(function() { $(".caja1").css("background-color", "green"); });
    $("#b6").click(function() {
        $(".caja1").fadeIn(100);
        setTimeout(function() { $(".caja1").fadeOut(800); }, 8000);
    });
    $("#b7").click(function() { $(".caja1").toggleClass("animacion") });

});