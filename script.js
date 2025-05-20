const btn = document.getElementById('clickBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  msg.textContent = 'Awesome! You clicked the button and updated the feature branch.';
});
