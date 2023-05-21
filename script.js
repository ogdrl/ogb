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
