const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

let close = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btns.forEach(function (e) {
  e.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    close();
  }
});

// let body = document.querySelector('#body');

// console.log(document.querySelector('.btn'));
// let modal = document.querySelector('.modal');
// let close = modal.querySelector('.close-modal');
// document.getElementById('');
// document.getElementsByClassName('');
// document.getElementsByTagName('');

// console.log(modal);
// console.log(close);
// let btns = document.querySelectorAll('.btn');
// btns.forEach(function (e, i) {
//   e.textContent = 'hello';
// });
// let h1 = document.querySelector('.h1');
// console.log(h1.textContent);
// h1.textContent = 'hello dom';

// console.log(h1.hasAttribute('id'));
// console.log(h1.getAttribute('class'));
// h1.setAttribute('id', 'h1');
// h1.removeAttribute('class');

// h1.style.color = 'red';

// document.querySelector('body').style.backgroundColor = 'yellow';

// Event Handler
//click event
// let btns = document.querySelectorAll('.btn');
// btns.forEach(function (e) {
//   e.addEventListener('mouseover', function () {
//     console.log('clicked');
//   });
// });
// btn.addEventListener('click', function () {
//   console.log('clicked');
// });
// key events
// window.addEventListener('keydown', function (e) {
//   console.log(e.key);
// });
