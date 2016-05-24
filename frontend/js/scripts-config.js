$('.featured-carousel').slick({
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  variableWidth: true,
  appendArrows: '.carousel-arrows',
  appendDots: '.carousel-dots',
  zIndex: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$( ".slick-dots li button" ).empty();
$( ".carousel-arrows button" ).empty();