// 1
const gallery = document.querySelector('.gallery');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
const images = document.querySelectorAll('.gallery .image');

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    fullImageContainer.style.display = 'flex';
    fullImage.src = image.src;
    currentIndex = index;
  });
});

document.addEventListener('keydown', (event) => {
  if (fullImageContainer.style.display === 'flex') {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    fullImage.src = images[currentIndex].src;
  }

  if (event.key === 'Escape') {
    fullImageContainer.style.display = 'none';
  }
});

fullImageContainer.addEventListener('click', () => {
  fullImageContainer.style.display = 'none';
});
// 2
const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input');
const renderButton = controls.querySelector('[data-action="render"]');
const destroyButton = controls.querySelector('[data-action="destroy"]');

const createBoxes = (amount) => {
  boxesContainer.innerHTML = ''; // Clear previous boxes
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

renderButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);
