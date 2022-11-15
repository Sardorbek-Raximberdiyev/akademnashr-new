const elSiteHeader = document.querySelector('.site-header');
const elOpenButton = elSiteHeader.querySelector('.open-button');
const elsSitenavItem = document.querySelectorAll('li');

if (elOpenButton) {
  elOpenButton.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header-open');
  })
}

elsSitenavItem.forEach((item)  => {
  item.addEventListener('click', function () {
    elSiteHeader.classList.remove('site-header-open');
  })
})