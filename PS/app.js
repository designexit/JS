// alert('Start');
// let h1 = document.querySelector('h1');
// h1.textContent = 'JavaScript Study'

// let myName = 'kmk'
// // myName;
// myName = '김민경'

// let cat = 'nova';
// if (cat == 'rose') {
//   alert('nova is my cat!');
// } else {
//   alert('rose is my cat!');
// }

for (let i = 1; i <=15; i++) {
  console.log(i);
  if (i % 3 == 0) {
    console.log('삼삼');
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('삼삼오오');
  } else if (i % 3 == 0) {
    console.log('삼삼');
  } else if (i % 5 == 0) {
    console.log('오오');
  } 
} 