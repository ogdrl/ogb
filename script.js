function toggleTheme() {
  const body = document.body;
  const footer = document.querySelector('footer');
  const themeToggle = document.querySelector('.theme-toggle');

  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  themeToggle.classList.toggle('dark-mode');

  // Check if the browser supports haptic feedback
  if ('vibrate' in navigator) {
    navigator.vibrate(50); // Provide haptic feedback for 50 milliseconds
  }
}

// Add animation to the dark mode button
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  themeToggle.classList.add('animate');
  setTimeout(() => {
    themeToggle.classList.remove('animate');
  }, 1000);
});

function nudgeScreen() {
  const mainElement = document.querySelector('main');
  mainElement.classList.add('nudge-screen');
  setTimeout(() => {
    mainElement.classList.remove('nudge-screen');
  }, 300);
}

function redirectTo(url) {
  window.location.href = url;
}
