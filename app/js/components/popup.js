const $popupOpeners = document.querySelectorAll('[data-opener]');

$popupOpeners.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = btn.dataset.popup;
    const $popup = document.getElementById(id);
    const $popupBg = $popup.querySelector('.popup__overlay');
    const $popupBox = $popup.querySelector('.popup__box');
    const $popupClose = $popup.querySelector('.popup__close');
    e.preventDefault();

    $popup.style.display = 'block';
    setTimeout(() => {
      $popupBg.style.opacity = '1';
    }, 10);
    setTimeout(() => {
      $popupBox.style.transform = 'translateX(0)';
    }, 100);
    $popup.classList.add('popup-opened');
    if (window.matchMedia('(max-width: 1024px)').matches) {
      document.body.classList.add('no-scroll');
    }
    [$popupClose, $popupBg].forEach(($el) => {
      $el.addEventListener('click', (e) => {
        setTimeout(() => {
          $popupBox.style.transform = 'translateX(1000px)';
        }, 10);
        setTimeout(() => {
          $popupBg.style.opacity = '0';
        }, 100);

        $popup.classList.remove('popup-opened');
        setTimeout(() => {
          $popup.style.display = 'none';
        }, 400);
        if (window.matchMedia('(max-width: 1024px)').matches) {
          document.body.classList.remove('no-scroll');
        }
      });
    });
  });
});
