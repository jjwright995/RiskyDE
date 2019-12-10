function showMenu() {
  var x = document.getElementById('openMenu');
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}

function closeApp() {
  window.location.replace("../deskman.html");
}

/* The following javascript handles redirects to apps. They are intended to leave no history. */
function openAbout() {
  window.location.replace("apps/about.html");
}
