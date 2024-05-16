var body = document.body;

if (localStorage.getItem('dark-mode') === 'true') {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}