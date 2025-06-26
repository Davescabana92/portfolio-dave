document.addEventListener('DOMContentLoaded', function () {
    const onglets = document.querySelectorAll('.onglet');
    onglets.forEach((onglet) => {
        onglet.addEventListener('click', function(e){
            e.preventDefault();
            onglets.forEach((el) => el.classList.remove('actif'));
            this.classList.add('actif');
        });
    });

    const dots = document.querySelectorAll('.dot');
    const track = document.querySelector('.project-card-container');
    const cardWidth = 11.1; // card + margin
    const cardsPerView = 3;

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            track.style.transform = `translateX(-${index * cardsPerView * cardWidth}%)`;

            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    const showMoreBtn = document.getElementById('showMoreBtn');
    const appServiceList = document.getElementById('appServiceList');
    showMoreBtn.addEventListener('click', () =>{
        const currentDisplay = window.getComputedStyle(appServiceList).display;
        if (currentDisplay === 'none'){
             appServiceList.style.display = 'flex';
        } else {
            appServiceList.style.display = 'none';
        }
       
    })
      //
     
      const showMoreUiBtn = document.getElementById('showMoreUiBtn');
      const uiServiceList = document.getElementById('UiServiceList');
      showMoreUiBtn.addEventListener('click', () => {
        const currentDisplay = window.getComputedStyle(uiServiceList).display;
        if (currentDisplay === 'none'){
            uiServiceList.style.display = 'flex';
        } else{
            uiServiceList.style.display = 'none';
        }
      })

      const showMoreUxBtn = document.getElementById('showMoreUxBtn');
      const uxServiceList = document.getElementById('UxServiceList');
      showMoreUxBtn.addEventListener('click', () => {
        const currentDisplay = window.getComputedStyle(uxServiceList).display;
        if (currentDisplay === 'none'){
            uxServiceList.style.display = 'flex';
        } else{
            uxServiceList.style.display = 'none';
        }
      }) 
});