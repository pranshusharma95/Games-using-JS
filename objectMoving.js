// var box = document.querySelector('.box')
// var move = 10;

// window.addEventListener('load', () => {
//     box.style.position = 'absolute';
//     box.style.left = 0;
//     box.style.top = 0;

// });

// window.addEventListener('keyup', (e) =>{
//     switch (e.key) {

//         case 'ArrowRight':
//             box.style.left = parseInt(box.style.left) + move + 'px';
//             break;
//         case 'ArrowLeft':
//             box.style.left = parseInt(box.style.left) - move + 'px';
//             console.log(box.style.left);
//             break;
//         case 'ArrowUp':
//             box.style.top = parseInt(box.style.top) - move + 'px';
//             console.log(e.key);
//             break;
//         case 'ArrowDown':
//             box.style.top = parseInt(box.style.top) + move + 'px';
//             break;
//     }
// })

// function abc() {
//     console.log('hi');
//     setTimeout(() => console.log('Hello"), 0);
//     console.log("there");
// };

// console.log('hello there");
// abc();

function abc(){
    console.log('hi');
    setTimeout(()=> console.log('hello'), 0);
    console.log("there");
}

console.log('hello there')
abc();