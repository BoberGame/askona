const $accordionItems = document.querySelectorAll('[data-accordion]');
const $accordionBtns = document.querySelectorAll('[data-accordion="btn"]');

$accordionBtns.forEach(($btn) => {
  $btn.addEventListener('click', (e) => {
    const $parent = e.target.closest('[data-accordion=""]');
    if ($parent) {
      $parent.classList.toggle('active');
      $btn.classList.toggle('active');
    }
  });
});
