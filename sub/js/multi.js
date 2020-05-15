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
