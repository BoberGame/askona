const $popupOpeners = document.querySelectorAll('[data-opener]');
const $cart = document.getElementById('cart');
let $cartItems;

function cartCounterClicks($parent, e) {
  const $input = $parent.querySelector('[data-cart="counter"]');

  if (e.target.closest('[data-cart="increment"]') && +$input.value < 999) {
    $input.value = +$input.value + 1;
  }

  if (e.target.closest('[data-cart="decrement"]') && +$input.value > 1) {
    $input.value = +$input.value - 1;
  } else {
    // на счетчике значение 1; при нажатии на минус товар удаляется
  }
}

function cartCounterFocus(e) {
  if (
      e.target.value.includes('+') ||
      e.target.value.includes('-') ||
      +e.target.value <= 0
  ) {
    e.target.value = '1';
  }
}

$cartItems = $cart.querySelectorAll('[data-cart="item"]');
$cartItems &&
$cartItems.forEach(($el) => {
  $el.addEventListener('click', (e) => cartCounterClicks($el, e));

  const $input = $el.querySelector('[data-cart="counter"]');
  $input.addEventListener('focusout', (e) => cartCounterFocus(e));
});



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
  try {
    const callBtn = document.querySelector('.header__all-btn');
    const catalog = document.querySelector('.products');
    const scrollBarWidth = calcScroll();
    callBtn.addEventListener('click', (e) => {
      e.preventDefault();
      catalog.classList.toggle('hidden');
      callBtn.classList.toggle('active');
      document.body.classList.add('no-scroll');
      document.body.style.marginRight = `${scrollBarWidth}px`;
      if (catalog.classList.contains('hidden')) {
        document.body.style.marginRight = '';
        document.body.classList.remove('no-scroll');
      }
    });
  } catch (e) {
    console.log(e);
  }
};
callCatalog();



$popupOpeners.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = btn.dataset.popup;
    const $popup = document.getElementById(id);
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


// import './components/accordion.js';
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


const changeIconColor = () => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__mobileButtons-button');
    if (btn) {
      btn.classList.toggle('active');
    }
  });
};
changeIconColor();

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

// const $scrollItems = document.querySelectorAll('.scrollbar');
// $scrollItems.forEach(($item) => {
//   scrollHandler($item);
//   $item.addEventListener('scroll', () => {
//     scrollHandler($item);
//   });
// });

const $blocks = document.querySelectorAll('.filter-price');
$blocks.forEach(($item) => {
  if ($item) {
    const rangeSlider = $item.querySelector('.filter-price__slider');
    noUiSlider.create(rangeSlider, {
      start: [21750, 14056600],
      connect: true,
      step: 1,
      range: {
        min: [21750],
        max: [14056600],
      },
    });
    const inputLower = $item.querySelector('.filter-price__field--min');
    const inputUpper = $item.querySelector('.filter-price__field--max');
    const inputs = [inputLower, inputUpper];
    rangeSlider.noUiSlider.on('update', (values, handle) => {
      inputs[handle].value = Math.round(values[handle]);
    });

    inputs.forEach((input, index) => {
      input.addEventListener('change', (e) => {
        let arr = [null, null];
        arr[index] = e.currentTarget.value;
        rangeSlider.noUiSlider.set(arr);
      });
    });
  }
});

document.querySelectorAll('.select').forEach((el) => {
  let settings = {
    create: false,
    controlInput: null,
    allowEmptyOption: true,
  };
  if (el) {
    new TomSelect(el, settings);
  }
});


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

try {
  new Splide('#sale-slider', {
    perPage: 3,
    perMove: 1,
    type: 'loop',
    padding: '4.9%',
    gap: '32px',
    arrows: false,
    flickPower: 100,
    flickMaxPages: 1,
    breakpoints: {
      1440: {
        padding: '1.2%',
      },
      1200: {
        perPage: 3,
        gap: '16px',
        padding: '1.5%',
      },
      900: {
        padding: '2%',
      },
      768: {
        perPage: 2,
      },
      580: {
        perPage: 1,
        gap: '10px',
        padding: '3.7%',
      },
      425: {
        padding: '4.2%',
      },
    },
  }).mount();
} catch (error) {}

try {
  new Splide('#cart-more-slider', {
    perPage: 2.5,
    perMove: 1,
    type: 'loop',
    gap: '32px',
    arrows: true,
    pagination: false,
    flickPower: 100,
    flickMaxPages: 1,
    breakpoints: {
      425: {
        perPage: 2,
      },
    },
  }).mount();
} catch (error) {}

try {
  new Splide('#info-slider', {
    perPage: 1,
    perMove: 1,
    type: 'loop',
    flickPower: 100,
    flickMaxPages: 1,
    mediaQuery: 'min',
    arrows: false,
    breakpoints: {
      902: {
        perPage: 3,
        type: 'slide',
        drag: false,
        pagination: false,
      },
      425: {
        gap: 0,
        padding: '0%',
      },
      320: {
        perPage: 1,
        gap: '12px',
        padding: { left: 0, right: '6%' },
      },
    },
  }).mount();
} catch (error) {}

try {
  new Splide('#category-slider', {
    perPage: 2,
    perMove: 1,
    type: 'loop',
    gap: '32px',
    arrows: true,
    flickPower: 100,
    flickMaxPages: 1,
    breakpoints: {
      1200: {
        perPage: 1.5,
      },
      1024: {
        perPage: 1,
      },
    },
  }).mount();
} catch (error) {}

try {
  const catalogSlider = new Splide('#catalog-slider', {
    perPage: 12,
    perMove: 1,
    type: 'loop',
    gap: '32px',
    arrows: true,
    flickPower: 100,
    flickMaxPages: 1,
    breakpoints: {
      1440: {
        arrows: false,
        perPage: 10,
      },
      1200: {
        perPage: 9,
      },
      1024: {
        perPage: 7.5,
      },
      768: {
        perPage: 4.5,
        pagination: false,
        speed: 50,
        flickPower: 50,
      },
      620: {
        perPage: 3.5,
      },
      520: {
        perPage: 3,
      },
      425: {
        perPage: 2.5,
      },
    },
  });

  const bar = document.querySelector('.catalog-slider-progress-bar');
  catalogSlider.on('move', () => {
    const end = catalogSlider.Components.Controller.getEnd() + 1;
    const slide = catalogSlider.Components.Slides.getAt(
      catalogSlider.index,
    ).slide;
    const rate = Math.min((catalogSlider.index + 1) / end, 1);
    bar.style.transform = `translateX(${100 * rate}%)`;
    bar.style.width = slide.offsetWidth + 'px';
  });
  catalogSlider.mount();
} catch (error) {}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`#product-slider-${i}`, {
      perPage: 4,
      perMove: 1,
      type: 'loop',
      gap: '32px',
      arrows: true,
      flickPower: 100,
      flickMaxPages: 1,
      dragMinThreshold: {
        touch: 10,
      },
      breakpoints: {
        1440: {
          perPage: 3,
          arrows: false,
        },
        900: {
          perPage: 2,
        },
        580: {
          // perPage: 1.5,
        },
      },
    }).mount();
  } catch (error) {}
}

const slideForHover = (sliderElem, slider) => {
  const paginationElems = sliderElem.querySelectorAll(
    '.splide__pagination__page',
  );
  paginationElems.forEach((bullet) => {
    bullet.addEventListener('mouseenter', () => {
      const slideIndex = bullet.getAttribute('aria-label').replace(/^\D+/g, '');
      const slide = parseInt(slideIndex - 1, 10);
      slider.go(slide);
    });
  });
};

/* Gallery slider */
const galleryItems = document.querySelectorAll('.splide__gallery');
for (let index = 0; index < galleryItems.length; index++) {
  const element = galleryItems[index];
  element.id = `product-gallery-${index}`;
  if (element !== null) {
    const slider = new Splide(`#product-gallery-${index}`, {
      type: 'slide',
      pagination: true,
      arrows: false,
      gap: 0,
      drag: false,
      breakpoints: {
        768: {
          pagination: false,
        },
      },
    });
    slider.mount();
    const slidesLen = slider.length;
    if (slidesLen > 1) {
      if (window.matchMedia('(min-width: 728px)').matches) {
        slideForHover(element, slider);
      }
    }
  }
}

try {
  new Splide('#card-reviews-slider', {
    perPage: 6,
    perMove: 1,
    type: 'loop',
    gap: '20px',
    arrows: false,
    pagination: true,
    flickPower: 100,
    flickMaxPages: 1,
    dragMinThreshold: {
      touch: 10,
    },
    breakpoints: {
      1200: {
        perPage: 4,
      },
    },
  }).mount();
} catch (error) {}

try {
  new Splide('#card-reviews-sliderPopup', {
    perPage: 2.5,
    perMove: 1,
    type: 'loop',
    gap: '20px',
    arrows: false,
    pagination: true,
    flickPower: 100,
    flickMaxPages: 1,
    // breakpoints: {
    //   902: {
    //     perPage: 1.5,
    //   },
    // },
  }).mount();
} catch (error) {}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`#benefits-slider-${i}`, {
      perPage: 1,
      perMove: 1,
      type: 'loop',
      gap: '32px',
      arrows: false,
      flickPower: 100,
      flickMaxPages: 1,
    }).mount();
  } catch (error) {}
}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`#card-attachment-slider-${i}`, {
      perPage: 3.5,
      perMove: 1,
      type: 'loop',
      gap: '20px',
      arrows: false,
      pagination: true,
      flickPower: 100,
      flickMaxPages: 1,
      // breakpoints: {
      //   902: {
      //     perPage: 2.5,
      //   },
      // },
    }).mount();
  } catch (error) {}
}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`.card-slider-${i}`, {
      perPage: 4,
      perMove: 1,
      type: 'loop',
      gap: '32px',
      flickPower: 100,
      flickMaxPages: 1,
      pagination: false,
      dragMinThreshold: {
        touch: 10,
      },
      breakpoints: {
        1440: {
          perPage: 3,
          arrows: false,
        },
        900: {
          perPage: 2,
        },
        580: {
          perPage: 2,
        },
      },
    }).mount();
  } catch (error) {}
}

try {
  const thumbnails = new Splide('#thumbnails', {
    fixedWidth: 114,
    fixedHeight: 76,
    height: 540,
    isNavigation: true,
    gap: 16,
    direction: 'ttb',
    pagination: false,
    breakpoints: {
      1024: {
        fixedWidth: 95,
      },
      768: {
        destroy: true,
      },
    },
  });
  const main = new Splide('#thumbnail-main', {
    pagination: false,
    arrows: false,
    type: 'slide',
    speed: 600,
    dragMinThreshold: {
      touch: 10,
    },
    breakpoints: {
      768: {
        pagination: true,
        type: 'loop',
      },
    },
  });
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
} catch (error) {}

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 1000) {
    document.querySelector('.scroll-top').classList.add('active');
  } else {
    document.querySelector('.scroll-top').classList.remove('active');
  }
});
