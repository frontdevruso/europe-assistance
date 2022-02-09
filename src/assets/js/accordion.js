document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", (e) => {
        if(e.target.closest(".accordion__item")) {
            let self = e.target.closest(".accordion__item");
            const control = self.querySelector(".accordion__item-btn");
            const paragraph = self.querySelector(".accordion__item-btn-paragraph");
            const content = self.querySelector(".accordion__item-content");
            const icon = control.querySelector(".accordion__icon");

            const onOpenAccordion = () => {
                self.classList.toggle("accordion__item--open");
            }
            const onOpenAccordionMb = () => {
                if (e.target.closest(".accordion__item-btn-paragraph")) return
                onOpenAccordion();
            }

            if (window.innerWidth > 400){
                if(e.target.closest(".accordion__item-btn")) {
                    onOpenAccordion();
                }
            }

            if (window.innerWidth < 400){
                if(e.target.closest(".accordion__item-btn")) {
                    onOpenAccordionMb();
                }
            }
        }
    });

    const medSlideItem = document.querySelectorAll('[data-accordion]');
    medSlideItem.forEach(function(item) {
        console.log(item.getAttribute('data-accordion'));
        item.addEventListener('click', function() {
            const certainAccordion = document.getElementById(item.getAttribute('data-accordion'));
            certainAccordion.classList.add('accordion__item--open');
        });
    })
});