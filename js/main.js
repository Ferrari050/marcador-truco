var totalNos = 0;
var totalEles = 0;

document.getElementById("amount-nos").innerHTML = totalNos;
document.getElementById("amount-eles").innerHTML = totalEles;

/////Funções-Nós/////

function adicionaUmPontoNos() {
    document.getElementById("amount-nos").innerHTML = ` ${++totalNos}`;
}

function adicionaTresPontosNos() {
    document.getElementById("amount-nos").innerHTML = ` ${totalNos = totalNos + 3}`;
}

function adicionaSeisPontosNos() {
    document.getElementById("amount-nos").innerHTML = ` ${totalNos = totalNos + 6}`;
}

function adicionaNovePontosNos() {
    document.getElementById("amount-nos").innerHTML = ` ${totalNos = totalNos + 9}`;
}

function tiraUmPontoNos() {
    document.getElementById("amount-nos").innerHTML = ` ${totalNos = totalNos - 1}`;
}

/////Funções-Eles/////

function adicionaUmPontoEles() {
    document.getElementById("amount-eles").innerHTML = ` ${++totalEles}`;
}

function adicionaTresPontoEles() {
    document.getElementById("amount-eles").innerHTML = ` ${totalEles = totalEles + 3}`;
}

function adicionaSeisPontoEles() {
    document.getElementById("amount-eles").innerHTML = ` ${totalEles = totalEles + 6}`;
}

function adicionaNovePontoEles() {
    document.getElementById("amount-eles").innerHTML = ` ${totalEles = totalEles + 9}`;
}

function tiraUmPontoEless() {
    document.getElementById("amount-eles").innerHTML = ` ${totalEles = totalEles - 1}`;
}

/////add-nós//////

var addUmNos = document.getElementById("botao-adiciona-um-nos");
addUmNos.onclick = function () {
    if (totalNos < 11) {
        adicionaUmPontoNos();
    } else {
        alert("o jogo acabou, nós Ganhamos!");
        window.location.reload(true);
    }
}

var addTresNos = document.getElementById("botao-adiciona-tres-nos");
addTresNos.onclick = function () {
    if (totalNos < 9) {
        adicionaTresPontosNos();
    } else {
        alert("o jogo acabou, nós Ganhamos!");
        window.location.reload(true);
    }
}

var addSeisNos = document.getElementById("botao-adiciona-seis-nos");
addSeisNos.onclick = function () {
    if (totalNos < 6) {
        adicionaSeisPontosNos();
    } else {
        alert("o jogo acabou, nós Ganhamos!");
        window.location.reload(true);
    }
}

var addNoveNos = document.getElementById("botao-adiciona-nove-nos");
addNoveNos.onclick = function () {
    if (totalNos < 9) {
        adicionaNovePontosNos();
    } else {
        alert("O jogo acabou, nós Ganhamos!");
        window.location.reload(true);
    }
}
var tiraUmNos = document.getElementById("botao-tira-um-nos");
tiraUmNos.onclick = function () {
    tiraUmPontoNos();
}

///////add-eles//////

var addUmEles = document.getElementById("botao-adiciona-um-eles");
addUmEles.onclick = function () {
    if (totalEles < 11) {
        adicionaUmPontoEles();
    } else {
        alert("O jogo acabou, eles ganharam!");
        window.location.reload(true);
    }
}

var addTresEles = document.getElementById("botao-adiciona-tres-eles");
addTresEles.onclick = function () {
    if (totalEles < 9) {
        adicionaTresPontoEles();
    } else {
        alert("O jogo acabou, eles ganharam!");
        window.location.reload(true);
    }
}

var addSeisEles = document.getElementById("botao-adiciona-seis-eles");
addSeisEles.onclick = function () {
    if (totalEles < 6) {
        adicionaSeisPontoEles();
    } else {
        alert("O jogo acabou, eles ganharam!");
        window.location.reload(true);
    }
}

var addNoveEles = document.getElementById("botao-adiciona-nove-eles");
addNoveEles.onclick = function () {
    if (totalEles < 9) {
        adicionaNovePontoEles();
    } else {
        alert("O jogo acabou, eles ganharam!");
        window.location.reload(true);
    }
}

var tiraUmEles = document.getElementById("botao-tira-um-eles");
tiraUmEles.onclick = function () {
    tiraUmPontoEless();
}