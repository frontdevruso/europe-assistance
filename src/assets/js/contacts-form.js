document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        const formPhone = document.querySelector('[data-validate-field="tel"]');
        const formName = document.querySelector('[data-validate-field="name"]');
        const formMail = document.querySelector('[data-validate-field="mail"]');
        const formMessage = document.querySelector('[data-validate-field="message"]');
    
        const formAllInput = document.querySelectorAll('[data-validate-field]');
        const contactFormSubmitBtn = document.getElementById('contactFormBtn');
        const selectBox = document.getElementById('selectBoxForm');
        const card360deg = document.querySelector('.card360deg');
    
        let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        let hasSelected = false;
    
        formAllInput.forEach(function(item) {
            item.addEventListener('focus', function() {
                item.classList.remove('g-input-error');
            })
        })
    
        contactFormSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            let errCount = 0;
    
            if (formName.value.length === 0) {
                formName.classList.add('g-input-error');
                errCount++;
            } else {
                formName.classList.remove('g-input-error');
            }
    
            if (formMail.value.length === 0 || !regx.test(formMail.value)) {
                formMail.classList.add('g-input-error');
                errCount++;
            } else {
                formMail.classList.remove('g-input-error');
            }
    
            if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 20) {
                formPhone.classList.add('g-input-error');
                errCount++;
            } else {
                formPhone.classList.remove('g-input-error');
            }
    
    
            if (hasSelected === false) {
                selectBox.classList.add('g-select-error');
                errCount++;
            } else {
                selectBox.classList.remove('g-select-error');
            }
    
            if (optionsContainer.classList.contains('active')) {
                selectBox.classList.remove('g-select-error');
            }
    
            if (errCount === 0) {
                card360deg.classList.add('card360deg--active');
                // HERE YOU CAN ADD A AJAX REQUEST TO SEND THE FORM
            }
        });
    
        const selected = document.getElementById("selectBoxCurrent");
        const optionsContainer = document.getElementById("optionsContainer");
        const selectArrow = document.getElementById("selectBoxArrow");
        const optionsList = document.querySelectorAll(".option--form");
    
        document.addEventListener('click', (event) => {
            let isClickInsideElement = selected.contains(event.target); 
            if (!isClickInsideElement) {
                optionsContainer.classList.remove("active");
                selectArrow.classList.remove("select-box-arrow-opened");
            }
        });
    
        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active");
            selectArrow.classList.toggle("select-box-arrow-opened");
            selectBox.classList.remove('g-select-error');
        });
    
        optionsList.forEach(o => {
            o.addEventListener("click", () => {
                hasSelected = true;
                selected.innerHTML = o.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
                selectArrow.classList.remove("select-box-arrow-opened");
            });
        });
    }
});