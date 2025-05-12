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

  // projects

  let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})



// blob
// Get elements for mouth and eyes
document.addEventListener('DOMContentLoaded', () => {
  // Get elements for mouth and eyes
  const mouth = document.getElementById('mouth');
  const eyes = document.querySelectorAll('.eye');
  const blob = document.getElementById('blob1');
  const projects = document.getElementById('projects');

  // Initial state of mouth
  if (mouth) {
    mouth.classList.add('neutral'); // Set initial state as neutral
  }

  // Smile on mouse movement (when activity happens)
  if (mouth) {
    document.addEventListener('mousemove', () => {
      mouth.classList.remove('neutral');  // Remove neutral state
      mouth.classList.add('smile');       // Add smile state
    });
  }

  // Big smile on hover of the blob
  if (projects) {
    projects.addEventListener('mouseenter', () => {
      if (mouth) {
        mouth.classList.remove('neutral', 'smile');
        mouth.classList.add('big-smile'); // Big smile on hover
      }
    });

    projects.addEventListener('mouseleave', () => {
      if (mouth) {
        mouth.classList.remove('big-smile');
        mouth.classList.add('smile');    // Return to smile when hover ends
      }
    });
  }

  // Blob click triggers sinister smile and background change
  if (blob) {
    blob.addEventListener('click', () => {
      if (mouth) {
        mouth.classList.remove('smile', 'big-smile');
        mouth.classList.add('sinister-smile');  // Add sinister smile on click
        document.body.style.backgroundColor = '#f8d7da';  // Slight red background
      }
    });
  }

  // Eyes follow the cursor
  document.addEventListener('mousemove', (e) => {
    eyes.forEach(eye => {
      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.pageY - eyeY, e.pageX - eyeX);
      const x = Math.cos(angle) * 5;
      const y = Math.sin(angle) * 5;
      eye.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});
