let totalNos = 0;
let totalEles = 0;

const updateScore = (team, points) => {
    const element = document.getElementById(`amount-${team}`);
    if (element) {
        element.innerHTML = points.toString();
    }
};


const updateScores = () => {
    updateScore('nos', totalNos);
    updateScore('eles', totalEles);
};

const addPoints = (team, points) => {
    if (team === 'nos') {
        totalNos += points;
    } else if (team === 'eles') {
        totalEles += points;
    }
    updateScores();
};

const subtractPoint = (team) => {
    if (team === 'nos' && totalNos > 0) {
        totalNos--;
    } else if (team === 'eles' && totalEles > 0) {
        totalEles--;
    } else {
        alert("O número de pontos não pode ser menor que zero!");
        return;
    }
    updateScores();
};

const checkGameOver = (team) => {
    if (team === 'nos' && totalNos >= 10) {
        alert("O jogo acabou, nós ganhamos!");
        //window.location.reload(true);
    } else if (team === 'eles' && totalEles >= 10) {
        alert("O jogo acabou, eles ganharam!");
        //window.location.reload(true);
    }
};

const addPointButtons = document.querySelectorAll("[id^='botao-adiciona']");
addPointButtons.forEach(button => {
    button.addEventListener('click', function () {
        const team = this.id.split('-')[3];
        const points = parseInt(this.id.split('-')[4]);
        addPoints(team, points);
        checkGameOver(team);
    });
});

const subtractPointButtons = document.querySelectorAll("[id^='botao-tira']");
subtractPointButtons.forEach(button => {
    button.addEventListener('click', function () {
        const team = this.id.split('-')[3];
        subtractPoint(team);
    });
});

updateScores();
