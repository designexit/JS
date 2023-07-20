// 대화 상자 함수
// let age = prompt('나이를 입력해 주세요','100');
// alert(`당신의 나이는 ${age}입니다.`);

// let result = confirm('당신이 주인인가요?');
// alert(result);

// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
// alert(a + b); // 12
// alert(Number(a) + Number(b));

// if문
// let 사과 = 4, 바나나 = 5;
// if(사과 > 바나나){
//   console.log('사과가 바나나보다 많습니다.'); //참이면 콘솔 로그에 출력
// } else if (바나나 > 사과) {
//   console.log('바나나가 사과보다 많습니다.');
// } else { 
//   console.log('같습니다.');
// }
// if(사과 < 바나나){
//   console.log('사과가 바나나보다 적습니다.') 
// }
// if(사과 = 바나나){
//   console.log('사과와 바나나는 같습니다.') 
// }

// for 반복문 : 1~100 콘솔에 출력
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// sum 합계
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log('1부터 100까지 합계는 : ' + sum);

// 최종예제

// for (let i = 1; i <=100; i++) {
//   console.log(i);
//   if (true) {
//   } else if (i * 3) {
//     console.log('삼삼');
//   } else if (i * 5) {
//     console.log('오오');
//   } 
// } 

for (let i = 1; i <=100; i++) {
  console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('삼삼오오');
  } else if (i % 3 == 0) {
    console.log('삼삼');
  } else if (i % 5 == 0) {
    console.log('오오');
  } 
} 