var  butoni1 = document.getElementById('btn1');
var butoni2 = docuent.getElementById('btn2');
var buttoni3 = document.getElementById('btn3');
var teksti = document.getelementbyid('teksti');
var butoni4 = document.getElementById('btn4')
butoni1.onclick = function() {
    alert('Blerje e suksesshme');
}
    butoni2.onmouseover = function() {
        alert('sapo vendose mausin mbi mua');
    }
    butoni3.onmouseleave = function () {
        alert('Ti e largove mausin prej meje');
    }
butoni4.onclick = function (){
    teksti.style.color = "red";
    teksti.style.backgroundcolor ="grey"
}