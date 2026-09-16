const stageSwiper = new Swiper('.stage-swiper', {
  loop: true,
  speed: 550,
  autoplay: { delay: 6500, disableOnInteraction: false },
  navigation: {
    nextEl: '.stage-arrow--next',
    prevEl: '.stage-arrow--prev'
  },
  keyboard: { enabled: true }
});

const filterButtons = document.querySelectorAll('.scene-tab');
const programRows = document.querySelectorAll('.program-row');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    programRows.forEach(row => {
      const visible = filter === 'all' || row.dataset.scene === filter;
      row.hidden = !visible;
    });
  });
});


headerSearchToggle?.addEventListener('click', () => {
  headerSearchPanel.hidden = !headerSearchPanel.hidden;
  if (!headerSearchPanel.hidden) {
    document.getElementById('headerSearch')?.focus();
  }
});

document.querySelector('.header-search-form')?.addEventListener('submit', event => {
  event.preventDefault();
});

document.querySelector('.event-finder__form')?.addEventListener('submit', event => {
  event.preventDefault();
});
