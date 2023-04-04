const boxColor = document.querySelector('#box-color');
const rgbColor = document.querySelector('#rgb-color');
const submitButton = document.querySelector('#submit');
const hexColor = document.querySelector('#hexColor');

const hexToRgba = (hex) => {

    color = hex.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b
    ).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
    
    applyRule(color);

};

function applyRule(color) {

    boxColor.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    rgbColor.value = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

}

submit.addEventListener('click', () => {

    regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if(hexColor.value === '' || hexColor.value.match(regex) === null) {

        alert('Digite um hexadecimal válido!');

    } else {

        hexToRgba(hexColor.value);

    };

});