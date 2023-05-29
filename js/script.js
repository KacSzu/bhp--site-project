// MAKING MOBILE NAV WORK
const btnMobileNavEl = document.querySelector(`.btn-mobile-nav`);
const headerEl = document.querySelector(`.header`);
const mainNavListEl = document.querySelector(`.main-nav-list`);

btnMobileNavEl.addEventListener(`click`, function (e) {
  headerEl.classList.toggle(`nav-open`);
});

mainNavListEl.addEventListener(`click`, function (e) {
//   e.preventDefault();
  if (e.target.classList.contains(`main-nav-link`)) {
    headerEl.classList.remove(`nav-open`);
  }
});
