const burger = document.querySelector('.burger-icon')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-icon_close')
  const headerNav = document.querySelector('.header-nav')
  headerNav.classList.toggle('header-nav_active')
})