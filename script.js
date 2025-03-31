const pixelContainer = document.querySelector('.pixel-container');
let gridSize =  35;//256;/*document.querySelector('#grid-size')*/
function getGridSize() {
    value = prompt("Please enter desired pixel count");
    gridSize = value*value;
    console.log(gridSize);
    if (gridSize > 10000) {
        return 10000;}
    else if (gridSize <= 10000) {
        return gridSize;
    } else return 'Error';

}

const addPixels = document.querySelector('#set-grid');

function clearGrid() {
    if (pixelIds.length <= 0) {
        console.log(pixelIds.length);
        console.log('already clear');
        return;
        
    } else if (pixelIds.length >0) {
        for (let i = 0; i < pixelIds.length; i++) {
        const pixel = document.getElementById(`pixel_${i}`);
        //console.log(`${pixel}`);
        pixelContainer.removeChild(pixel);
        console.log(`pixel_${i} Deleted`);
        
    }
        pixelIds = [];
        }  else return 'error';
}


let pixelIds = []
function generatePixels(){
/*generate pixels*/
clearGrid();
for (i = 0; i < gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.setAttribute('id',`pixel_${i}`);
    let pixelHeight = 100/gridSize; 
    let pixelWidth = 100/gridSize; 
    pixel.style.width = `10px`;
    pixel.style.height = `10px`;
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
        }; 
    }
    
const pauseButton = document.querySelector('#pause');

document.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
        case 'reset' :
            console.log('clicked reset');
            for (let i = 0; i < pixelIds.length; i++) {
                const pixel = document.querySelector(`#pixel_${i}`);
                console.log(pixel);
                pixel.classList.remove('shaded-pixel');
                pixel.classList.add('pixel');
            }
            break;
            //implement feature in futur.
        case 'pause' :
            alert('feature is not yet implemented')
            break;
        case 'set-grid' :
            getGridSize();
            generatePixels();
            break;
        case 'clear-grid' :
            clearGrid();
            break;
      }})

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
