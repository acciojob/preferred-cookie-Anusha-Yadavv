//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Function to set a cookie with a specified name, value, and expiration time
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
  }

  // Function to get the value of a cookie by name
  function getCookie(name) {
    const keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  }

  // Function to apply user preferences from cookies
  function applyUserPreferences() {
    const fontSize = getCookie('fontsize');
    const fontColor = getCookie('fontcolor');

    if (fontSize) {
      document.documentElement.style.setProperty('--fontsize', fontSize);
      document.getElementById('fontsize').value = fontSize.replace('px', '');
    }

    if (fontColor) {
      document.documentElement.style.setProperty('--fontcolor', fontColor);
      document.getElementById('fontcolor').value = fontColor;
    }
  }

  // Apply user preferences when the page loads
  applyUserPreferences();

  // Event listener for form submission
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user preferences from form inputs
    const fontSize = document.getElementById('fontsize').value + 'px';
    const fontColor = document.getElementById('fontcolor').value;

    // Apply user preferences immediately
    document.documentElement.style.setProperty('--fontsize', fontSize);
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    // Save user preferences in cookies
    setCookie('fontsize', fontSize, 365); // Expires in 365 days
    setCookie('fontcolor', fontColor, 365); // Expires in 365 days
  });
});
