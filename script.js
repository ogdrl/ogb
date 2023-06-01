// JavaScript code example: Display a centered popup with wording and auto dismiss after 0.5 seconds
window.addEventListener('load', function() {
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = 'Welcome to OGBlock!';

  document.body.appendChild(popup);

  setTimeout(function() {
    popup.classList.remove('show
