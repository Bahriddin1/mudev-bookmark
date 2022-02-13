const elSiteFeaturesSlide = document.querySelector('.slide-item-wrapper');
const elFeaturesBookmark = document.querySelector('.features-bookmark')
const elSiteFeaturesSlideItem = document.querySelector('.features-slide-item');
const elBodyScrollHidden = document.querySelector('body');


elSiteFeaturesSlideItem.addEventListener('click', function () {
  elSiteFeaturesSlideItem.classList.toggle('features-slide-item-active');
  elSiteFeaturesSlide.classList.toggle('slide-item-wrapper-active');
  elFeaturesBookmark.classList.remove('visually-hidden');
  elBodyScrollHidden.classList.toggle('body-scroll-hidden');
});