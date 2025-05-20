const btn = document.getElementById('clickBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  msg.textContent = 'yuhooo! You clicked the button and updated the feature branch.';
});
