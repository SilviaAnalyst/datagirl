
function toggleMenu() {
    const menu = document.querySelector (".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


var typed = new Typed('#element', {
    strings: ['Software Developer', 'with Data Analyst skills.'],
    typeSpeed: 80,
    backspeed:50,
    loop: true
  });

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})