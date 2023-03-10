import Splide from '@splidejs/splide';
import './components/header.js';
import './components/popup.js';
import './components/accordion.js';
import './components/card.js';
import './components/form.js';
import './components/range-sldier.js';
import './components/select.js';

Splide.defaults = {
  type: 'loop',
  omitEnd: true,
  focus: 0,
  perMove: 1,
  dragMinThreshold: 10,
  flickPower: 100,
};

try {
  new Splide('#sale-slider', {
    perPage: 3,
    padding: '4.9%',
    gap: '32px',
    arrows: false,
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
    gap: '32px',
    arrows: true,
    pagination: false,
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
    gap: '1.6vmax',
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
    gap: '32px',
    arrows: true,
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
      gap: '32px',
      arrows: true,
      breakpoints: {
        1440: {
          perPage: 3,
          arrows: false,
        },
        900: {
          perPage: 2,
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
    gap: '20px',
    arrows: false,
    pagination: true,
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
    gap: '20px',
    arrows: false,
    pagination: true,
  }).mount();
} catch (error) {}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`#benefits-slider-${i}`, {
      perPage: 1,
      gap: '32px',
      arrows: false,
    }).mount();
  } catch (error) {}
}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`#card-attachment-slider-${i}`, {
      perPage: 3.5,
      gap: '20px',
      arrows: false,
      pagination: true,
    }).mount();
  } catch (error) {}
}

for (let i = 1; i <= 2; i++) {
  try {
    new Splide(`.card-slider-${i}`, {
      perPage: 4,
      gap: '32px',
      pagination: false,
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

const scrollBtn = document.querySelector('.scroll-top');

if (scrollBtn) {
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 1000) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });
}
