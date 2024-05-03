tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#F1F1F1',
        secondary: '#2B2A2A',
        tertiary: '#146758',
        searchfill: '#BAB3B3',
        searchplaceholder: '#5F6160',
        grad: 'rgba(0,0,0,0.3)',
        seemorebg: 'rgba(208,208,208,0.5)'
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
    }
  }
}

// const navbar = document.getElementById('search');
// let lastScrollTop = 0;
// const navbarHeight = navbar.offsetHeight;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
//     // Scrolling down
//     navbar.classList.add('hidden', '-translate-y-full');
//   } else {
//     // Scrolling up
//     navbar.classList.remove('hidden', '-translate-y-full');
//   }
//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });