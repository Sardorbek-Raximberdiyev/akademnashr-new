const elSiteHeader = document.querySelector('.site-header');
const elOpenButton = elSiteHeader.querySelector('.open-button');

if (elOpenButton) {
  elOpenButton.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header-open');
  })
}