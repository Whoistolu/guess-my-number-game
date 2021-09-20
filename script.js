const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.middle').textContent = number;

document.querySelector('#check').addEventListener('click', function () {
    const guess = Number(document.querySelector('#input').value;

    if (!guess) {
document.querySelector(#message).textContent = 'No number'
    } else if (guess === number) {
        document.querySelector(#message).textContent = "Correct Message"
    }
});