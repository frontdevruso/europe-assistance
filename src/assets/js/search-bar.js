const headerSearch = document.querySelector('.header__nav-search');
const headerLinks = document.querySelector('.header__nav-links');
const headerSearchBar = document.getElementById('headerSearch');
const headerSearchBtn = document.getElementById('headerSearchBtn');

headerSearchBar.addEventListener('focus', function(e) {
    headerLinks.classList.add('header__nav-links-hidden');
    document.getElementById("headerSearchIcon").style.transform = "rotate(90deg)";
    e.target.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            // HERE SHOULD BE A REQUEST FOR SEARCHING TO THE SERVER !!!
            if (headerSearchBar.value.length === 0) {
                return
            } else { alert('Производится поиск...') }
        }
    });
});

document.addEventListener('click', function(event) {
    let isClickInsideElement = headerSearch.contains(event.target);
    if (!isClickInsideElement) {
        headerLinks.classList.remove('header__nav-links-hidden');
        document.getElementById("headerSearchIcon").style.transform = "rotate(0deg)";
    }
});

headerSearchBtn.addEventListener('click', function() {
    // HERE SHOULD BE A REQUEST FOR SEARCHING TO THE SERVER !!!
    if (headerSearchBar.value.length === 0) {
        return
    } else { alert('Производится поиск...') }
})