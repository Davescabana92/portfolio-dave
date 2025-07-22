
      function showAbout() {
    document.getElementById('aboutMe').classList.add('active');
    document.getElementById('aboutMe').scrollIntoView({ behavior: 'smooth' });
  }

  function typeWriterEffect(element, text, speed = 50, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function triggerTypewriterAfterAnimation(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('visible'); // Active l'animation CSS

        // Attendre la durée de l'animation CSS (ex: 1000ms)
        setTimeout(() => {
          const elements = section.querySelectorAll('.typewriter');
          let delay = 0;
          elements.forEach(el => {
            const text = el.dataset.text;
            el.textContent = '';
            setTimeout(() => {
              typeWriterEffect(el, text);
            }, delay);
            delay += text.length * 50 + 500;
          });
        }, 1000); // Même durée que l'animation CSS

        obs.unobserve(section); // Ne le refait pas à chaque scroll
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section);
}

document.addEventListener('DOMContentLoaded', function () {

    const aboutSection = document.getElementById('aboutMe');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section visible : ajoute la classe pour l’animation d’entrée
        aboutSection.classList.add('active');
      } else {
        // Section non visible : retire la classe pour l’animation de sortie
        aboutSection.classList.remove('active');
      }
    });
  }, {
    threshold: 0.5  // Quand 50% ou plus est visible
  });

  observer.observe(aboutSection);

  triggerTypewriterAfterAnimation('#accueil');
    
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

