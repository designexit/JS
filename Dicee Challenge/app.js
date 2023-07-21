// alert('1');
// 이미지요소(element)들을 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

// 이미지객체에 src속성의 값을 입력
// img1.setAttribute ('src', 'images/dice6.png');
// img2.setAttribute ('src', 'images/dice2.png');

// let message ;
// message = 'Hello';

// alert('message');

// const message = "Hello";
// alert('message');

// const blue = '#555';
// const red = 'red';
// let color = blue;
// alert(color); 

// 랜덤 넘버 1 ~ 6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
console.log(randomNumber2);

// 이미지객체에 src속성의 값을 입력
img1.setAttribute ('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute ('src', 'images/dice' + randomNumber2 + '.png');

// 누가 이겼는지 판단
// h1.innerText = '누가 이겼음!😃';
let player1 = randomNumber1,
    player2 = randomNumber2 ; //let 생략하고 바로 randomNumber1, randomNumber2를 적용해도 됨
if(player1 > player2){
  h1.innerText = 'Player1 win!😃'
} else if (player1 < player2) {
  h1.innerText = 'Player2 win!😋'
} else {
  // 비김
  h1.innerText = 'Draw!😑'
}