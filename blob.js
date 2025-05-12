
  // Globally accessible function to close the modal
  function closeModal() {
    const gameModal = document.getElementById('gameModal');
    const mouth = document.getElementById('mouth');
    if (gameModal) gameModal.style.display = 'none';
    if (mouth) mouth.classList.remove('sinister-smile');
    document.body.style.backgroundColor = ''; // Reset background
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const mouth = document.getElementById('mouth');
    const eyes = document.querySelectorAll('.eye');
    const blob = document.getElementById('blob1');
    const projects = document.getElementById('projects');
    const gameModal = document.getElementById('gameModal');

    // Set initial mouth state
    if (mouth) {
      mouth.classList.add('neutral');
    }

    // Smile on general mouse movement
    document.addEventListener('mousemove', () => {
      if (mouth) {
        mouth.classList.remove('neutral');
        mouth.classList.add('smile');
      }
    });

    // Big smile on hover over projects
    if (projects) {
      projects.addEventListener('mouseenter', () => {
        if (mouth) {
          mouth.classList.remove('neutral', 'smile');
          mouth.classList.add('big-smile');
        }
      });

      projects.addEventListener('mouseleave', () => {
        if (mouth) {
          mouth.classList.remove('big-smile');
          mouth.classList.add('smile');
        }
      });
    }

    // Sinister smile and modal on blob click
    if (blob) {
      blob.addEventListener('click', () => {
        if (mouth) {
          mouth.classList.remove('smile', 'big-smile');
          mouth.classList.add('sinister-smile');
        }
        if (gameModal) gameModal.style.display = 'flex';
        document.body.style.backgroundColor = '#f8d7da';
      });
    }

    // Eye tracking effect
    document.addEventListener('mousemove', (e) => {
      eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const x = Math.cos(angle) * 5;
        const y = Math.sin(angle) * 5;
        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });
