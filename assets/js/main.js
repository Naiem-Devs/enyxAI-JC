(function($) {
  "use strict";


  let eyeBtn = document.querySelectorAll('.input_blk img')

  eyeBtn.forEach(eyeBtns => {
      eyeBtns.addEventListener('click', () => {
          var x = document.querySelectorAll(".input_blk input");
          x.forEach(xs => {
              if (xs.type === "password") {
              xs.type = "text";
              } else {
              xs.type = "password";
          }
          })
          
      })
  })


 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
 // menu 
  $('.ctg_btn').click( function (event){ 
    event.preventDefault()
    $('.Most_title').toggleClass('siteBar');   
  }); 

  // File format Select
  let Filebtn = document.querySelectorAll('.File a')

  Filebtn.forEach(Filebtns => {
    Filebtns.addEventListener('click', (e) => {
      e.preventDefault()
      FilebtnRemove()
      Filebtns.parentElement.classList.add('active')
    })
  })

  function FilebtnRemove() {
    Filebtn.forEach(Filebtns => {
      Filebtns.parentElement.classList.remove('active')
    })
  }


  // Level-of-detail Select
  let lavelbtn = document.querySelectorAll('.Level a')

  lavelbtn.forEach(lavelbtns => {
    lavelbtns.addEventListener('click', (e) => {
      e.preventDefault()
      lavelbtnRemove()
      lavelbtns.parentElement.classList.add('active')
    })
  })

  function lavelbtnRemove() {
    lavelbtn.forEach(lavelbtns => {
      lavelbtns.parentElement.classList.remove('active')
    })
  }

    // Texture resolution Select
  let resolutionbtn = document.querySelectorAll('.resolution a')

  resolutionbtn.forEach(resolutionbtns => {
    resolutionbtns.addEventListener('click', (e) => {
      e.preventDefault()
      resolutionbtnRemove()
      resolutionbtns.parentElement.classList.add('active')
    })
  })

  function resolutionbtnRemove() {
    resolutionbtn.forEach(resolutionbtns => {
      resolutionbtns.parentElement.classList.remove('active')
    })
  }



  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });
 

})(jQuery);
