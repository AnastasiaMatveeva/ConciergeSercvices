$('.btn-accordion').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('changed-img');
});
$('.show-asaid').click(function () {
  $('.right-side').toggleClass('hide');
  $('.vertical-block').toggleClass('hide');
  $('.bottom-block').toggleClass('hide');
  $('.m-container').toggleClass('hide-content');
});
$('.r-close').click(function () {
  $('.right-side').toggleClass('hide');
  $('.vertical-block').toggleClass('hide');
  $('.bottom-block').toggleClass('hide');
  $('.m-container').toggleClass('hide-content');
});

$('.carousel-control-next-icon').click(function () {
  $('.header-c').toggleClass('hidden');
  $('.header-e').toggleClass('hidden')
  $('.comfort').toggleClass('elitI');
  $('.elit').toggleClass('comfortI');
  $('.carousel-item-e').toggleClass('hidden');
  $('.carousel-item-c').toggleClass('hidden');
  // $(#one).addClass('.carousel-item-1');
});
$('.carousel-control-prev-icon').click(function () {
  $('.header-c').toggleClass('hidden');
  $('.header-e').toggleClass('hidden')
  $('.elit').toggleClass('comfortI');
  $('.comfort').toggleClass('elitI');
  $('.carousel-item-e').toggleClass('hidden');
  $('.carousel-item-c').toggleClass('hidden');
  // $(#one).addClass('.carousel-item-1');
});
