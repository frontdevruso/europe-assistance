const searchBar = document.getElementById('searchBar');
const searchBarBtn = document.getElementById('searchBarBtn');
const body = document.body;

searchBarBtn.addEventListener('click',function() {
    if(!body.classList.contains('m-open')) {
        searchBar.classList.toggle('header__searchbar--open');
    }
});