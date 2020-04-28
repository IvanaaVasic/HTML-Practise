function openMenu(menuName) {
  var MDCMenu = mdc.menu.MDCMenu;

  var menuElementInHtmlDom = document.querySelector(menuName);

  var myMenu = new MDCMenu(menuElementInHtmlDom);
  myMenu.open = true;
}
function goBack() {
  window.history.go(-1);
}
var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
carousel();
