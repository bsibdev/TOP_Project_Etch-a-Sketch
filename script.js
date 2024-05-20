const pixelContainer = document.querySelector('.pixel-container');
const gridSize = 256;/*document.querySelector('#grid-size')*/


const pixelIds = []

/*generate pixels*/
for (i = 0; i < gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.setAttribute('id',`pixel_${i}`);
    pixelIds.push(`pixel_${i}`);
    pixel.classList.add('pixel');
    const pixelText = document.createElement('h3');
    pixel.appendChild(pixelText);
    pixelContainer.appendChild(pixel);
    
    pixel.addEventListener('mouseover', () => {
        //console.log('hover');
        pixel.classList.remove('pixel');
        pixel.classList.add('shaded-pixel')
        console.log(pixel)
            });
        } 

const resetButton = document.querySelector('#reset')

resetButton.addEventListener('click', () => {
    pixelIds.forEach((element) => {
        element.classList.remove('shaded-pixel');
        element.classList.add('pixel')
    })
})

/*for (i = 0; i < pixelIds.length; i++) {
    let pixel = document.querySelector(`#pixel_${i}`);
    console.log();
}*/

function drawPixel(element,event){
    const pixel = document.querySelector(element);
    switch (event.target.id){
        case element :
            pixel.classList.remove('pixel');
            pixel.classList.add('shaded-pixel')
            console.log(pixel)
            break;
    } return event.target.id;
};

/*document.addEventListener('mouseover', (event) => {
    
    pixelIds.forEach((element) => {
        switch (element){
            case element :
                console.log('hover');
                pixel.classList.remove('pixel');
                pixel.classList.add('shaded-pixel')
                console.log(pixel)
                break;
        }
        return event.target.id;
    })
});*/