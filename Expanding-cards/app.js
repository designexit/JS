const panels = document.querySelectorAll('.panel');

// for(let i=0; i<panels.length; i++){
//   panels[i].addEventListener()
// }

panels.forEach(function(panel){
  panel.addEventListener('click', function(){
    // console.log(panel);
    // 모든 패널에서 active class를 제거하기
    removeActiveClass();
    panel.classList.add('active');

  })
})

function removeActiveClass(){
  // 패널에 있는 모든 active class를 제거
  // panels[0].classList.remove('active');
  // panels[1].classList.remove('active');
  // panels[2].classList.remove('active');
  // panels[3].classList.remove('active');
  // panels[4].classList.remove('active'); 아래와 같음

  panels.forEach(function(panel){
    panel.classList.remove('active');
  })
}