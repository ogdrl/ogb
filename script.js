function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggle.classList.remove('animate');
    // Add haptic feedback for light mode
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggle.classList.add('animate');
    // Add haptic feedback for dark mode
    if (navigator.vibrate) {
      navigator.vibrate([50, 30, 50]);
    }
  }
}

function redirectTo(url) {
  window.location.href = url;
}

function nudgeScreen() {
  const mainElement = document.querySelector('main');
  mainElement.classList.add('nudge-screen');
  setTimeout(() => {
    mainElement.classList.remove('nudge-screen');
  }, 300);
}

// Add event listener to the theme toggle button
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', toggleTheme);
