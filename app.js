const PAGES = {
  home: document.getElementById('page-home'),
  televisions: document.getElementById('page-televisions'),
  about: document.getElementById('page-about'),
};
const navBtns = [...document.querySelectorAll('.topnav__link')];
const brand = document.querySelector('.brand');

function showPage(route){
  Object.values(PAGES).forEach(s => s.classList.remove('is-active'));
  (PAGES[route] || PAGES.home).classList.add('is-active');
  navBtns.forEach(b => {
    if (b.dataset.route === route) b.setAttribute('aria-current','page');
    else b.removeAttribute('aria-current');
  });
  document.getElementById('app').focus();
}

function routeFromHash(){
  const r = (location.hash || '#home').slice(1);
  return ['home','televisions','about'].includes(r) ? r : 'home';
}

navBtns.forEach(b => b.addEventListener('click', () => {
  location.hash = b.dataset.route;
  showPage(b.dataset.route);
}));
brand.addEventListener('click', (e) => {
  e.preventDefault(); location.hash = 'home'; showPage('home');
});
window.addEventListener('hashchange', () => showPage(routeFromHash()));
showPage(routeFromHash());