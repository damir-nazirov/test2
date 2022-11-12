$(document).ready(function(){
    $(".slider").slick({

        // normal options...
        infinite: false,
      
        // the magic
        responsive: [{
      
            breakpoint: 768,
            settings: {
              slidesToShow: 1.11,
              dots: true,
              infinite: false
            }
      
          }, 
        //   {
      
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       dots: true
        //     }
      
        //   }, 
          
        //   {
      
        //     breakpoint: 769,
        //     settings: "unslick" // destroys slick
      
        //   }
        ]
      });
})


