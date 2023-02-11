const closeAllCheckBox = () => {
  const contents = document.querySelectorAll('.filter__content');
  const btns = document.querySelectorAll('.checkbox__btn');
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  contents.forEach((menu) => {
    menu.classList.remove('show');
  });
};

const checkBoxHandler = (e) => {
  const $btn = e.target.closest('.checkbox__btn');
  const $content = e.target.closest('.filter__content');
  if ($btn) {
    e.preventDefault();
    const $menu = $btn.nextElementSibling;
    closeAllCheckBox();
    $btn.classList.toggle('active');
    $menu.classList.toggle('show');
  }
  if (!$btn && !$content) {
    closeAllCheckBox();
  }
};

document.addEventListener('click', checkBoxHandler);

const scrollHandler = (elem) => {
  const scrollTop = elem.scrollTop;
  const scrollHeight = elem.scrollHeight - elem.offsetHeight;
  if (elem.classList.contains('has-scroll') && scrollTop >= scrollHeight) {
    elem.classList.remove('has-scroll');
  } else if (
    !elem.classList.contains('has-scroll') &&
    scrollTop < scrollHeight
  ) {
    elem.classList.add('has-scroll');
  }
};

const $filterMenu = document.querySelectorAll('.filter__menu');
$filterMenu.forEach(($menu) => {
  scrollHandler($menu);
  $menu.addEventListener('scroll', () => {
    scrollHandler($menu);
  });
});
