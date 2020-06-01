(function () {
  const $ = document.querySelector.bind(document);
  const hueStepEl = $('.hue-step');
  const colorCountEl = $('.colors-count');
  const textEl = $('.text-input');
  const resultEl = $('.result');

  function update() {
    const hueStep = hueStepEl.value;
    const count = colorCountEl.value;
    resultEl.innerHTML = '';
    let html = '';

    for (let i = 0; i < count; i++) {

      const hslColor = colorSequence(textEl.value, i, {hueStep: hueStep, saturation: 100, reverse: false});

      html += `<div class="cb" style="background-color: ${hslColor}"></div>`;
    }
    resultEl.innerHTML += html;
  }

  textEl.addEventListener('input', update);
  hueStepEl.addEventListener('input', update);
  colorCountEl.addEventListener('input', update);

  const firstClickFn = () => {
    textEl.select();
    textEl.removeEventListener('click', firstClickFn);
  };
  textEl.addEventListener('click', firstClickFn);

  update();
})();