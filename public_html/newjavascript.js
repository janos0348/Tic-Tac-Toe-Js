function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}
function CLASS(nev) {
    return document.getElementByclassName(nev);
}


function felRajzol() {
    var txt = "<table>";
    for (var i = 0; i < 3; i++) {
        txt += "<tr>";
        for (var j = 0; j < 3; j++) {
            txt += "<td>" + "i: " + i +"<br> j: "+ j + "</td>";
//            if (i===1) {
//                
//            ID("article")[1].style.border = "thick solid #0000FF";
//            }
        }
        txt += "</tr>";
    }
    txt += "</table>";
    $('article')[0].innerHTML = txt;

    $('article')[0].innerHTML = txt;



}














function init() {
    felRajzol();
    
}



window.addEventListener('load', init, false);