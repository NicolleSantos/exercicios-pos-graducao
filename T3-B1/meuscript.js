document.getElementById("paragrafo").innerHTML = "Hello World JavaScript";

var objt1 = document.getElementById("paragrafo2");
var n1 = 10;

function funcaoSoma(num1){
    var x = num1 +3;
    return x;
}

objt1.innerHTML = funcaoSoma(100);