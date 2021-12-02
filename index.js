const colorBtn = document.getElementById('color');
const zamow = document.getElementById('zamow');
const result = document.getElementById('result');
let ksztalt;

const link = (url) => {
    location.href = url;
}

const zamowienie = () => {
    const r = document.getElementById('r').value;
    const g = document.getElementById('g').value;
    const b = document.getElementById('b').value;
    const ksztaltInput = document.getElementById('ksztalt');
    let numerKsztaltu = ksztaltInput.value;

    if (numerKsztaltu == 1) {
        ksztalt = "Miś";
    } else if (numerKsztaltu == 2) {
        ksztalt = "Żabka";
    } else if (numerKsztaltu == 3) {
        ksztalt = "Serce";
    } else {
        result.innerHTML = `Nie znaleziono takiego kształtu!`;
    }
    result.innerHTML = `Zamówiłeś żelka: ${ksztalt}`;
    let color = `rgb(${r}, ${g}, ${b})`;
    colorBtn.style.backgroundColor = color;

}

zamow.addEventListener('click', zamowienie);