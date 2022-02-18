const elSiteFeaturesSlide = document.querySelectorAll('.slide-item-wrapper');
const elFeaturesBookmark = document.querySelectorAll('.features-bookmark')
const elSiteFeaturesSlideItem = document.querySelectorAll('.features-slide-item');
const elBodyScrollHidden = document.querySelector('body');


for

elSiteFeaturesSlideItem.addEventListener('click', function ()   {
  elSiteFeaturesSlideItem.classList.toggle('features-slide-item-active');
  elSiteFeaturesSlide.classList.toggle('slide-item-wrapper-active');
  elFeaturesBookmark.classList.remove('visually-hidden');
  elBodyScrollHidden.classList.toggle('body-scroll-hidden');
});