let headerElement = document.getElementsByTagName('header')[0];
document.addEventListener('scroll', scrollAnimation);

function scrollAnimation() {
  if (window.scrollY > 865) {
    headerElement.classList.add('scrolled');
  } else {
    headerElement.classList.remove('scrolled');
  }
}
