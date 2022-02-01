document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.experience__list')) {
        document.querySelector('.experience__list').style.setProperty('--animate-duration', '1s');
    }
    if (document.querySelector('.certificates__table-item--iso img')) {
        document.querySelector('.certificates__table-item--iso img').style.setProperty('--animate-duration', '.5s');
    }
    if (document.querySelector('.preview-about__picture')) {
        document.querySelector('.preview-about__picture').style.setProperty('--animate-duration', '2s');
    }
    if (document.querySelector('.about-media h1')) {
        document.querySelector('.about-media h1').style.setProperty('--animate-duration', '2s');
    }
    if (document.querySelector('.professions h1')) {
        document.querySelector('.professions h1').style.setProperty('--animate-duration', '2s');
    }
});