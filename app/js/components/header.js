import './cart.js';

const $banner = document.querySelector('[data-banner="main"]');
$banner.addEventListener('click', (event) => {
  if (event.target.closest('[data-banner="close"]')) {
    $banner.style.marginTop = `-${$banner.offsetHeight}px`;
  }
});

const $countryToggler = document.querySelector('.header__top-countryWrapper');
$countryToggler.addEventListener('click', () => {
  document.querySelector('.header__top-countryList').classList.toggle('active');
});

const $headerBurger = document.querySelector('.header-mobile__burger');
const $headerMobileMenu = document.querySelector('.header-mobile__menu');
const $headerMobileWrapper = document.querySelector('.header');

$headerBurger.addEventListener('click', (e) => {
  $headerBurger.classList.toggle('active');
  $headerMobileMenu.classList.toggle('active');
  $headerMobileWrapper.classList.toggle('active');
  document.body.classList.add('no-scroll');
  if (!$headerBurger.classList.contains('active')) {
    document.body.classList.remove('no-scroll');
  }
});

const callMobileSubmenu = (e) => {
  const link = e.target.closest('.header-mobile__wrapper');
  const backBtn = e.target.closest('.header-mobile__link--back');
  if (link) {
    const submenu = link.querySelector('.header-mobile-submenu');
    if (submenu) submenu.classList.add('active');
    if (backBtn) {
      const menu = backBtn.closest('.header-mobile-submenu');
      menu.classList.remove('active');
    }
  }
};
document.addEventListener('click', callMobileSubmenu);

const changeNumber = () => {
  const numbers = document.querySelectorAll('.header__numbers');
  numbers.forEach((number) => {
    const btn = number.querySelector('.header__number');
    const hiddenNumber = number.querySelector('.header__number--hide');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.style.display = 'none';
      hiddenNumber.style.display = 'block';
    });
  });
};
changeNumber();

/* to find out width scrollbar */
const calcScroll = () => {
  const div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflow = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

const callCatalog = () => {
  const callBtn = document.querySelector('.header__allProducts');
  const catalog = document.querySelector('.products');
  const scrollBarWidth = calcScroll();
  callBtn.addEventListener('click', (e) => {
    e.preventDefault();
    catalog.classList.toggle('hidden');
    document.body.classList.add('no-scroll');
    document.body.style.marginRight = `${scrollBarWidth}px`;
    if (catalog.classList.contains('hidden')) {
      document.body.style.marginRight = '';
      document.body.classList.remove('no-scroll');
    }
  });
};
callCatalog();
