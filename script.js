const button = document.querySelector('#changeSize').addEventListener('click', function () {redraw()})

    
function reset() {
    gridContainer.removeChild(box);
}

function redraw () {
    let number = prompt('pick a number from 1-40');
    if (number < 1 || number > 40) {
        let number = prompt('pick a number from 1-40');
        number;
    }
    for (let i = 1; i <= number * number; i++) {
        const gridContainer = document.querySelector('#grid-container');
        const box = document.createElement('div');
        gridContainer.appendChild(box);
        box.style.width = `${512 / number}px`;
        box.style.height = `${512 / number}px`;
        box.addEventListener('mouseenter', (e) => {
                box.style.backgroundColor = 'Black';
            } )
            const button = document.querySelector('#changeSize').addEventListener('click', function () {reset()})
    
            function reset() {
                gridContainer.removeChild(box);
            }
    } 
}
