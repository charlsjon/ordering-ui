tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F1F1F1',
        secondary: '#2B2A2A',
        tertiary: '#146758',
        searchfill: '#BAB3B3',
        searchplaceholder: '#5F6160',
        grad: 'rgba(0,0,0,0.3)',
        lightshadow: 'rgba(208,208,208,0.5)',
        darkshadow: 'rgba(81,81,81,0.5)',
        gray: '#E3E3E3',
        davygray: '#555555',
        matterhorn: '#555353',
        richblack: '#0F0E0E',
        textprimary: '#131516',
        textsecondary: '#EDF6F9',
      },
      container: {
        center: true,
      },
      size: {
        '100': '100px',
      },
      fontSize: {
        xxs: "10px"
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        robotoslab: ['"Roboto Slab"', 'serif']
      },
      borderRadius: {
        xl4: '30px',
      },
    }
  }
}


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
    // navbtn.classList.add('pb-14');
    navbar.classList.remove('hidden');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

var body = document.getElementsByTagName("BODY")[0];
const drkBtn = document.getElementById("dark-light-btn");
const menuBar = document.getElementById("menu-bar");
const sideBar = document.getElementById("side-bar");
const companyLogo = document.getElementById("company-logo");
menuBar.addEventListener('click', ()=> {
  sideBar.classList.add("w-full");
  sideBar.classList.add("overflow-auto");
})

companyLogo.addEventListener('click', ()=> {
  sideBar.classList.remove("w-full");
  sideBar.classList.remove("overflow-auto");
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

function toLunch() {
  location.replace('template/lunch.html');
}

function toDashboard() {
  location.replace('/index.html');
}