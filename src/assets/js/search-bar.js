const headerLinks = document.querySelector('.header__nav-links');
const headerSearch = document.getElementById('headerSearch');

headerSearch.addEventListener('focus', function() {
    headerLinks.classList.add('header__nav-links-hidden');
    document.getElementById("headerSearchIcon").style.transform = "rotate(90deg)";
});

headerSearch.addEventListener('blur', function() {
    headerLinks.classList.remove('header__nav-links-hidden');
    document.getElementById("headerSearchIcon").style.transform = "rotate(0deg)";
});