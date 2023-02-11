import noUiSlider from 'nouislider';
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
