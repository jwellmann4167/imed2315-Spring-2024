const color = document.querySelector('.color');
const colorInput = document.querySelector('.color-input');

//add input event listener
colorInput.addEventListener('input', () => {

    /*Set background of the color div to color set in input field*/

    color.style.backgroundColor = colorInput.value;




});