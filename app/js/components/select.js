import TomSelect from 'tom-select';

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
