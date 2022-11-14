$(document).ready(function(){
    $(".slider").slick({

        // normal options...
        infinite: false,
        slidesToShow: 1.11,
        dots: true,

      
        // the magic
        responsive: [
          // {
      
            // breakpoint: 768,
            // settings: {
            //   slidesToShow: 1.11,
            //   dots: true,
            //   infinite: false
            // }
      
          // }, 
          // {
      
          //   breakpoint: 320,
          //   settings: {
          //     settings: "slick",
          //     slidesToShow: 2,
          //     dots: true
          //   }
      
          // }, 
          
          // {
      
          //   breakpoint: 760,
          //   settings: "unslick" // destroys slick
      
          // }
        ]
      });
})


