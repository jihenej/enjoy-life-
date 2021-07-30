let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

let countDate = new Date('August 17, 2021 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)

var btnlike = document.querySelectorAll('.like-btn')
var like = document.querySelectorAll('.far.fa-heart')
for(let i=0; i<btnlike.length; i++){
  btnlike[i].addEventListener('click', function () {
    if(like[i].style.color == 'rgb(39, 174, 96)') like[i].style.color = 'black';
    else like[i].style.color = 'rgb(39, 174, 96)';
  })
}

function itemSearch() {
    var input, filter, recette, recetteBox, h3, i, title;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    recette = document.getElementById("recette");
    recetteBox = document.getElementsByClassName("recette-box");
    h3=document.getElementsByClassName("card__title");
    for (i = 0; i < recetteBox.length; i++) {
        title = h3[i].innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            recetteBox[i].style.display = "";
        } else {
            recetteBox[i].style.display = "none";
        }
    }
}