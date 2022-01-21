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

/* document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(el => {
        el.addEventListener("click", (e) => {
            const self = e.currentTarget;
            const control = self.querySelector(".accordion__control");
            const content = self.querySelector(".accordion__content");

            self.classList.toggle("open");

            const watchHeight = () => {
                content.style.maxHeight = content.scrollHeight + "px";
            };

            window.addEventListener("resize", () => {
                watchHeight();
            });

            // если открыт аккордеон
            if (self.classList.contains("open")) {
                control.setAttribute("aria-expanded", true);
                content.setAttribute("aria-hidden", false);
                watchHeight();
            } else {
                control.setAttribute("aria-expanded", false);
                content.setAttribute("aria-hidden", true);
                content.style.maxHeight = null;
            }
        });
    });
}); */