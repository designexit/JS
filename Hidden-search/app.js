// 검색박스 (입력창 + 버튼)
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// 버튼 클릭 시 search에 active 클래스 토글
btn.addEventListener('click', function(){
  search.classList.toggle('active'); //active class가 있으면 제거, 없으면 추가
  input.focus(); //입력창 포커스 커서
})

