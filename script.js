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

function toggleTheme() {
  const bodyElement = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const isDarkMode = bodyElement.classList.toggle('dark-mode');

  if (isDarkMode) {
    themeToggle.classList.add('animate');
    themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    themeToggle.classList.remove('animate');
    themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
  }

  // Store the user's preferred theme in localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Check the user's preferred theme from localStorage
const userTheme = localStorage.getItem('theme');
if (userTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Detect if the user's device prefers dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode && !userTheme) {
  document.body.classList.add('dark-mode');
}
