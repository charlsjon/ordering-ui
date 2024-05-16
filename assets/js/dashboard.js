
const navbar = document.getElementById('search');
const navbtn = document.getElementById('navbtn');
let lastScrollTop = 0;
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
    // Scrolling down
    navbtn.classList.remove('pb-14');
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

var body = document.body;
const drkBtn = document.getElementById("dark-light-btn");
const menuBar = document.getElementById("menu-bar");
const sideBar = document.getElementById("side-bar");
const companyLogo = document.getElementById("company-logo");
menuBar.addEventListener('click', ()=> {
  sideBar.classList.add("w-full");
  sideBar.classList.add("overflow-auto");
  console.log('slide');
})

companyLogo.addEventListener('click', ()=> {
  sideBar.classList.remove("w-full");
  sideBar.classList.remove("overflow-auto");
  console.log('unslide');
})


if (localStorage.getItem('dark-mode') === 'true') {
  body.classList.add('dark');
  drkBtn.classList.add('fa-moon');
} else {
  body.classList.remove('dark');
  drkBtn.classList.add('fa-sun');
}

drkBtn.addEventListener('click', ()=> {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', true);
    drkBtn.classList.remove('fa-sun');
    drkBtn.classList.add('fa-moon');
  } else {
    localStorage.setItem('dark-mode', false); 
    drkBtn.classList.remove('fa-moon');
    drkBtn.classList.add('fa-sun');
  } 
})