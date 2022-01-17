const searchBar = document.getElementById('searchBar');
const searchBarBtn = document.getElementById('searchBarBtn');

searchBarBtn.addEventListener('click',function() {
    searchBar.classList.toggle('header__searchbar--open');
});