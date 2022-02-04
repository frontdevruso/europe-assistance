document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const links = document.querySelectorAll(".menu__links-item");
    const decalreLink = document.querySelector(".header__helpful-declare");
    const menu = document.getElementById("menu");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        searchBar.classList.remove('header__searchbar--open');

        e.currentTarget.classList.toggle("isOpen");
        body.classList.toggle('m-open');
    });

    links.forEach(function(item) {
        item.addEventListener('click', function () {
            burger.classList.remove("isOpen");
            body.classList.remove('m-open');
        });
    })
});