var nav = document.getElementById('head');

window.onscroll = function () {

  if (window.pageYOffset > 0) {
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.left = 2;

  } else {
    // nav.style.position = "absolute";
    nav.style.position = 'relative'; //fixed
  }
}