for (let i = 0; i < 256; i++) {
    const gridContainer = document.querySelector('#grid-container');
    const box = document.createElement('div');
    gridContainer.appendChild(box);
    box.classList.add('unit');
}


