const headerSearch = document.querySelector('.header__nav-search');
const headerLinks = document.querySelector('.header__nav-links');
const headerSearchBar = document.getElementById('headerSearch');
const headerSearchBarMb = document.getElementById('headerSearchBarMb');
const headerSearchBtn = document.getElementById('headerSearchBtn');
const headerSearchBtnMb = document.getElementById('headerSearchBtnMb');

const ajaxRequest = () => {
    // HERE SHOULD BE A REQUEST FOR SEARCHING TO THE SERVER !!!
    alert('Производится поиск...')
}

headerSearchBar.addEventListener('focus', function(e) {
    headerLinks.classList.add('header__nav-links-hidden');
    document.getElementById("headerSearchIcon").style.transform = "rotate(90deg)";
    e.target.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (headerSearchBar.value.length === 0) {
                return
            } else { ajaxRequest() }
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
    if (headerSearchBar.value.length === 0) {
        return
    } else { ajaxRequest() }
})

headerSearchBtnMb.addEventListener('click', function() {
    if (headerSearchBarMb.value.length === 0) {
        return
    } else { ajaxRequest() }
})