/////////////////////////////////EJ1/////////////////////////////////

document.getElementsByClassName("caja1")[0].addEventListener("click", function() { alert("TESTO DEL PRIMER CUADRADO") })
document.getElementsByClassName("caja2")[0].addEventListener("dblclick", function() { document.getElementsByClassName("caja2")[0].style.display = "none"; })
document.getElementsByClassName("caja3")[0].addEventListener("mouseenter", function() { document.getElementsByClassName("caja3")[0].classList.add("fade"); })
document.getElementsByClassName("caja4")[0].addEventListener("mouseleave", function() { document.getElementsByClassName("caja4")[0].style.backgroundColor = "brown"; })
document.getElementsByClassName("caja5")[0].addEventListener("mouseover", function() { document.getElementsByClassName("caja5")[0].style.color = "yellow"; })
document.getElementsByClassName("caja5")[0].addEventListener("mouseleave", function() { document.getElementsByClassName("caja5")[0].style.color = "orange"; })
document.getElementsByClassName("caja6")[0].addEventListener("mousedown", function() { document.getElementsByClassName("caja6")[0].innerHTML = "pulsado"; })
document.getElementsByClassName("caja7")[0].addEventListener("mouseup", function() { document.getElementsByClassName("caja7")[0].innerHTML = "soltado"; })

/////////////////////////////////EJ2/////////////////////////////////