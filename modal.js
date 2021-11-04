const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const closeModal = document.querySelector('.close-modal');

const close = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);

window.addEventListener('keydown', e => {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    close();
  }
});
