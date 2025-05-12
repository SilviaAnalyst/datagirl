function toggleMenu() {
    const menu = document.querySelector (".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  var typed = new Typed('#element', {
    strings: ['Software Developer', 'with Data Analyst skills.'],
    typeSpeed: 80,
    backspeed:50,
    loop: true
  });
