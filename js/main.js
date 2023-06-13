let pontosNos = document.getElementById("amount-nos").innerHTML = 0;
let pontosEles = document.getElementById("amount-eles").innerHTML = 0;

let totalNos;
let totalEles;

function adicionaUmPontoNos() {
    alert("adicionei 1");
    return totalNos = pontosNos + 1;
}

window.onload = function () {
    document.getElementById("botao-adiciona-um-nos") = add1;

    add1.onclick = function () {
        adicionaUmPontoNos();
    };
}

function adicionaTresPontoNos() {
    alert("adicionei 1");
    return totalNos = pontosNos + 3;
}

function adicionaSeisPontoNos() {
    alert("adicionei 1");
    return totalNos = pontosNos + 6;
}

function adicionaNovePontoNos() {
    alert("adicionei 1");
    return totalNos = pontosNos + 9;
}

function TiraUmPontoNos() {
    alert("adicionei 1");
    return totalNos = pontosNos - 1;
}