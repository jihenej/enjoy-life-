var btnlike = document.getElementsByClassName('btn')
var like = document.querySelectorAll('.far.fa-heart')
for(let i=0; i<btnlike.length; i++){
  btnlike[i].addEventListener('click', function () {
  if(like[i].style.color == 'rgb(39, 174, 96)') like[i].style.color = 'black';
  else like[i].style.color = 'rgb(39, 174, 96)';
  })
}