const pixelContainer = document.querySelector('.pixel-container');
const gridSize = 256;/*document.querySelector('#grid-size')*/



for (i = 0; i < gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    const pixelText = document.createElement('h3');
    pixel.appendChild(pixelText);
    pixelContainer.appendChild(pixel);
    
}



