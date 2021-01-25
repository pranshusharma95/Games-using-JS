var box = document.querySelector('.box')
var move = 10;

window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = 0;
    box.style.top = 0;

});

window.addEventListener('keyup', (e) =>{
    switch (e.key) {

        case 'ArrowRight':
            box.style.left = parseInt(box.style.left) + move + 'px';
            break;
        case 'ArrowLeft':
            box.style.left = parseInt(box.style.left) - move + 'px';
            break;
        case 'ArrowUp':
            box.style.top = parseInt(box.style.top) - move + 'px';
            break;
        case 'ArrowDown':
            box.style.top = parseInt(box.style.top) + move + 'px';
            break;
    }
})

