document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    // const links = document.querySelectorAll(".menu__links-item");
    const menu = document.getElementById("menu");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("isOpen");
    });

    // links.forEach(function(item) {
    //     item.addEventListener('click', function () {
    //         burger.classList.remove("isOpen");
    //         body.classList.remove("menu-lock");
    //         menu.classList.remove('m-open');
    //     });
    // })
});