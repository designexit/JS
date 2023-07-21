// alert("hi");
const btn1 = document.querySelector("button");
const btns = document.querySelectorAll("button");

for(let i = 0; i < 7; i++) {
  btns[i].addEventListener('click', function (){
    // alert("클릭됨");
    const audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  } );
}

// btns[0].addEventListener('click', function (){
//   alert("클릭됨");
// } );

// btn1.addEventListener('click', function (){
//   alert("클릭됨");
// } );

// function handleClick() {
//   alert("클릭됨");
// }

