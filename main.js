const items = document.querySelectorAll('.nav-item');
const indicator = document.querySelector('.nav-indicator');
const homeSections = document.getElementById('home-sections'); 

if (items.length && indicator && homeSections) {

  function updateIndicator(el) {
    indicator.style.width = el.offsetWidth + 'px';
    indicator.style.left = el.offsetLeft + 'px';
  }

  function showHomeSections(show) {
    homeSections.style.display = show ? 'block' : 'none';
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Changer l'élément actif
      const activeItem = document.querySelector('.nav-item.active');
      if (activeItem) activeItem.classList.remove('active');
      item.classList.add('active');

      
      updateIndicator(item);

      
      if(item.id === 'btn-home') {
        showHomeSections(true);
      } else {
        showHomeSections(false);
      }
    });
  });

  
  const initialActive = document.querySelector('.nav-item.active') || items[0];
  initialActive.classList.add('active');
  updateIndicator(initialActive);

  
  showHomeSections(initialActive.id === 'btn-home');
}
