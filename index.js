const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
  return `
        <div class="item h${h} v${v}">
          <img src="images/${randomNumber(32)}.jpg">
          <div class="item__overlay">
            <button>Take a closer <span>👀</span></button>
          </div>
        </div>
      `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const { src } = e.currentTarget.querySelector('img');
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

function getUser() {
  fetch('http://127.0.0.1:5500/db/users.json').then(response =>
    response.json()
  );
}

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);
