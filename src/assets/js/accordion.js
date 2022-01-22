document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        if(e.target.closest(".accordion__item")) {
            let self = e.target.closest(".accordion__item");
            const control = self.querySelector(".accordion__item-btn");
            const paragraph = self.querySelector(".accordion__item-btn-paragraph");
            const content = self.querySelector(".accordion__item-content");
            const icon = control.querySelector(".accordion__icon");

            if (window.innerWidth > 400){
                if(e.target.closest(".accordion__item-btn")) {
                    icon.classList.toggle("accordion__icon--open");
                    content.classList.toggle("accordion__item-content--open");
                    paragraph.classList.toggle("accordion__item-btn-paragraph--open");
                }
            }

            if (window.innerWidth < 400){
                if(e.target.closest(".accordion__item-btn")) {
                    if (e.target.closest(".accordion__item-btn-paragraph")) return
                    icon.classList.toggle("accordion__icon--open");
                    content.classList.toggle("accordion__item-content--open");
                    paragraph.classList.toggle("accordion__item-btn-paragraph--open");
                }
            }
        }
    });
});