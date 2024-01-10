
// loader
const loader = document.querySelector('.loaders')
        setTimeout(() => {
        loader.style.display = 'none'
        }, 2000);

        console.log(loader);

        // bactop

        window.addEventListener("scroll", function () {
          toggleBacktop();
        });
        
        let backtop = document.getElementById("backtop");
        
        function toggleBacktop() {
          if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
          ) {
            backtop.classList.add('backtop-show')
          } else {
            backtop.classList.remove('backtop-show')
          }
        }

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });