// Function to nudge the screen
function nudgeScreen() {
  const mainElement = document.querySelector('main');
  mainElement.classList.add('nudge-screen');
  setTimeout(() => {
    mainElement.classList.remove('nudge-screen');
  }, 300);
}

// Function to redirect to a URL
function redirectTo(url) {
  window.location.href = url;
}

// Function to toggle between light and dark mode
function toggleTheme() {
  const bodyElement = document.body;
  const footerElement = document.querySelector('footer');
  const themeToggle = document.querySelector('.theme-toggle');
  
  bodyElement.classList.toggle('light-mode');
  footerElement.classList.toggle('light-mode');
  themeToggle.classList.toggle('animate');
  
  // Haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(20);
  }
}
