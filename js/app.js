function openMenu(menuName) {
  var MDCMenu = mdc.menu.MDCMenu;

  var menuElementInHtmlDom = document.querySelector(menuName);

  var myMenu = new MDCMenu(menuElementInHtmlDom);
  myMenu.open = true;
}
function goBack() {
  window.history.go(-1);
}
