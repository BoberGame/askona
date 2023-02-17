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

$cartItems = document.querySelectorAll('[data-cart="item"]');
if ($cartItems) {
  $cartItems &&
    $cartItems.forEach(($el) => {
      $el.addEventListener('click', (e) => cartCounterClicks($el, e));

      const $input = $el.querySelector('[data-cart="counter"]');
      $input.addEventListener('focusout', (e) => cartCounterFocus(e));
    });
}
