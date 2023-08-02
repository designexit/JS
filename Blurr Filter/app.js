const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0; //로딩 숫자 초기값

let int = setInterval(blurring, 30);

// blurring();

function blurring() {
  load++;
  // console.log(load);

  if (load > 99) {
    clearInterval(int);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// 한 레인지(0~100)를 다른 레인지 (1~0) , 블러(30~0) 로 변환하는 함수 공식 => 스택오버플로우 검색
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
