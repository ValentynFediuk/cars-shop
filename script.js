function toggleModelAndYear(makeSelect) {
    const modelSelect = document.getElementById("model");
    const yearSelect = document.getElementById("year");
    if (makeSelect.value) {
      modelSelect.disabled = false;
      yearSelect.disabled = false;
    } else {
      modelSelect.disabled = true;
      yearSelect.disabled = true;
    }
}

const modelsByMake = {
    "BMW": ["X1", "X3", "X5", "3 Series", "5 Series", "7 Series"],
    "Ford": ["Fiesta", "Focus", "Mustang", "Escape", "Explorer", "F-150"],
    "Honda": ["Accord", "Civic", "CR-V", "Pilot", "Odyssey"],
};

function populateModels(make) {
    const models = modelsByMake[make];
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '';
    for (const model of models) {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    }
};

const form = document.querySelector('form');
const cards = document.querySelectorAll('.card');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const make = form.make.value;
  const model = form.model.value;
  const year = form.year.value;

  cards.forEach((card) => {
    const cardMake = card.querySelector('.card-make').textContent;
    const cardModel = card.querySelector('.card-model').textContent;
    const cardYear = card.querySelector('.card-year').textContent;

    if (
      (make === '' || cardMake === make) &&
      (model === '' || cardModel === model) &&
      (year === '' || cardYear === year)
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});