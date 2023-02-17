const $popupOpeners = document.querySelectorAll('[data-opener]');
import { calcScroll } from './header.js';

$popupOpeners.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = btn.dataset.popup;
    const $popup = document.getElementById(id);
    if (!$popup) return;
    const $popupBg = $popup.querySelector('.popup__overlay');
    const $popupBox = $popup.querySelector('.popup__box');
    const $popupClose = $popup.querySelector('.popup__close');
    const scrollBarWidth = calcScroll();
    e.preventDefault();

    $popup.style.display = 'block';
    setTimeout(() => {
      $popupBg.style.opacity = '1';
    }, 10);
    setTimeout(() => {
      $popupBox.style.transform = 'translateX(0)';
    }, 100);

    document.body.classList.add('no-scroll');
    document.body.style.marginRight = `${scrollBarWidth}px`;
    $popup.classList.add('popup-opened');
    [$popupClose, $popupBg].forEach(($el) => {
      $el.addEventListener('click', (e) => {
        setTimeout(() => {
          $popupBox.style.transform = 'translateX(1000px)';
        }, 10);
        setTimeout(() => {
          $popupBg.style.opacity = '0';
        }, 100);
        document.body.classList.remove('no-scroll');
        document.body.style.marginRight = ``;
        $popup.classList.remove('popup-opened');
        setTimeout(() => {
          $popup.style.display = 'none';
        }, 400);
      });
    });
  });
});
