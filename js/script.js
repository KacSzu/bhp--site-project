// MAKING MOBILE NAV WORK
const btnMobileNavEl = document.querySelector(`.btn-mobile-nav`);
const headerEl = document.querySelector(`.header`)
btnMobileNavEl.addEventListener(`click`, function(e){
    headerEl.classList.toggle(`nav-open`)
})