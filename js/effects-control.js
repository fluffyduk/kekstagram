const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreview = uploadOverlay.querySelector('.img-upload__preview');
const effectsList = uploadOverlay.querySelector('.effects__list');
const effectSlider = uploadOverlay.querySelector('.effect-level__slider');
const effectSliderValue = uploadOverlay.querySelector('.effect-level__value');
const effectContainer = uploadOverlay.querySelector('.img-upload__effect-level');

const chromeEffect = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', () => {
    uploadPreview.style.filter = `grayscale(${effectSlider.noUiSlider.get()})`;
    effectSliderValue.value = effectSlider.noUiSlider.get();
  });
};

const sepiaEffect = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', () => {
    uploadPreview.style.filter = `sepia(${effectSlider.noUiSlider.get()})`;
    effectSliderValue.value = effectSlider.noUiSlider.get();
  });
};

const marvinEffect = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', () => {
    uploadPreview.style.filter = `invert(${effectSlider.noUiSlider.get()}%)`;
    effectSliderValue.value = effectSlider.noUiSlider.get();
  });
};

const phobosEffect = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', () => {
    uploadPreview.style.filter = `blur(${effectSlider.noUiSlider.get()}px)`;
    effectSliderValue.value = effectSlider.noUiSlider.get();
  });
};

const heatEffect = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', () => {
    uploadPreview.style.filter = `brightness(${effectSlider.noUiSlider.get()})`;
    effectSliderValue.value = effectSlider.noUiSlider.get();
  });
};

const setEffects = () => {
  effectsList.addEventListener('click', (evt) => {
    if (effectSlider && effectSlider.noUiSlider) {
      effectSlider.noUiSlider.destroy();
    }
    if (evt.target.matches('input[type="radio"]')) {
      const effectType = evt.target.value;
      switch (effectType) {
        case 'none':
          uploadPreview.style.filter = 'none';
          uploadOverlay.querySelector('.img-upload__effect-level').classList.add('hidden');
          break;
        case 'chrome':
          effectContainer.classList.remove('hidden');
          chromeEffect();
          break;
        case 'sepia':
          effectContainer.classList.remove('hidden');
          sepiaEffect();
          break;
        case 'marvin':
          effectContainer.classList.remove('hidden');
          marvinEffect();
          break;
        case 'phobos':
          effectContainer.classList.remove('hidden');
          phobosEffect();
          break;
        case 'heat':
          effectContainer.classList.remove('hidden');
          heatEffect();
          break;
      }
    }
  });
};

export {setEffects};