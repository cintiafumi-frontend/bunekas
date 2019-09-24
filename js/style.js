const windowWidth = window.screen.width;
const windowHeight = window.screen.height;
const video = document.querySelector('.video');
const bunekasImageCircle = document.querySelector('.bunekas-circle');
const bunekasYellowCircle = document.querySelector('.bunekas-circle__background');
const bunekasText = document.querySelector('.bunekas-circle__text');
const carousel = document.querySelector('.carousel');

const africaWhy = document.querySelector('.africa__why');
const africaEllipse = document.querySelector('.africa__ellipse');

const map = document.querySelector('.where__map');


if (windowWidth >= 992) {
  const videoWidth = windowWidth * 0.55 - 60;
  const videoHeight = videoWidth * 9 / 16;
  video.setAttribute('width', videoWidth);
  video.setAttribute('height', videoHeight);

  const external = videoWidth * 0.7;
  bunekasImageCircle.style.width = `${external}px`;
  bunekasImageCircle.style.height = `${external}px`;

  const internal = videoWidth * 0.35;
  bunekasYellowCircle.style.width = `${internal}px`;
  bunekasYellowCircle.style.height = `${internal}px`;

  bunekasText.style.fontSize = `${internal / 6}px`;

  carousel.style.width = '55%';

  africaEllipse.style.height = `${africaWhy.offsetHeight}px`;

  const mapWidth = windowWidth * 0.5 - 120;
  const mapHeight = mapWidth * 9 / 16;
  map.setAttribute('width', mapWidth);
  map.setAttribute('height', mapHeight);

} else {
  const videoHeight = windowWidth * 9 / 16;
  video.setAttribute('width', windowWidth);
  video.setAttribute('height', videoHeight);

  bunekasImageCircle.style.width = `${windowWidth}px`;
  bunekasImageCircle.style.height = `${windowWidth}px`;

  bunekasYellowCircle.style.width = `${windowWidth / 2}px`;
  bunekasYellowCircle.style.height = `${windowWidth / 2}px`;

  bunekasText.style.fontSize = `${windowWidth/14}px`;

  map.setAttribute('width', `${windowWidth - 100}`);
  map.setAttribute('height', videoHeight);
}

