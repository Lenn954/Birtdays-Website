// Initialize AOS animations
 document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Cat animation
  const cat = document.getElementById('cat');
  
  function moveCatRandomly() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;
  }

  // Initial position
  moveCatRandomly();
  
  // Move cat every 4 seconds
  setInterval(moveCatRandomly, 4000);

  // Make cat interactive
  cat.addEventListener('click', function() {
    this.style.transform = 'scale(1.2) rotate(20deg)';
    setTimeout(() => {
      this.style.transform = '';
    }, 500);
    createConfetti(10);
  });

  // Music control
  const musicBtn = document.getElementById('playMusicBtn');
  const birthdaySong = document.getElementById('birthdaySong');
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      birthdaySong.pause();
      musicBtn.classList.remove('playing');
    } else {
      birthdaySong.play();
      musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  // Create confetti effect
  function createConfetti(amount) {
    for (let i = 0; i < amount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // ======================================================
      // === PERBAIKAN DI SINI ===
      // ======================================================
      // Baris asli Anda: confetti.style.left = Math.random() * 100 + 'vw';
      // Ini menyebabkan 'overflow' karena 100vw + lebar confetti > 100%
      
      const confettiMaxWidth = 15; // Lebar maks confetti (10 + 5)
      confetti.style.left = Math.random() * (window.innerWidth - confettiMaxWidth) + 'px';
      // ======================================================
      
      // Random properties
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.width = Math.floor(Math.random() * 10 + 5) + 'px';
      confetti.style.height = Math.floor(Math.random() * 10 + 5) + 'px';
      confetti.style.opacity = Math.random();
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      
      document.body.appendChild(confetti);
      
      // Remove after animation
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }

  function getRandomColor() {
    const colors = ['#ff6b6b', '#5a189a', '#ff9e00', '#4ecdc4', '#ff85ea'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Create initial confetti
  window.addEventListener('load', () => {
    setTimeout(() => {
      createConfetti(50);
    }, 1000);
  });
