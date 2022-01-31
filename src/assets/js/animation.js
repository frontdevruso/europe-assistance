document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.experience__list')) {
        document.querySelector('.experience__list').style.setProperty('--animate-duration', '1s');
    }
    if (document.querySelector('.certificates__table-item--iso img')) {
        document.querySelector('.certificates__table-item--iso img').style.setProperty('--animate-duration', '.5s');
    }
});