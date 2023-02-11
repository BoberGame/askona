const changeIconColor = () => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__mobileButtons-button');
    if (btn) {
      btn.classList.toggle('active');
    }
  });
};
changeIconColor();