document.addEventListener("DOMContentLoaded", () => {
    const allLangSwitchers = document.querySelectorAll('[data-language]');
    allLangSwitchers.forEach(function(item) {
        item.addEventListener('click', function(){
            const allCurrentLanguage = document.querySelectorAll('.language__switcher main span');
            const allAdditionalyLanguage = document.querySelectorAll('.language__switcher-select span');

            const switchLanguage = (dataLang, additionalyLang, currentLang) => {
                allLangSwitchers.forEach(function(item) {item.setAttribute('data-language', dataLang);})
                allAdditionalyLanguage.forEach(function(item) {
                    item.innerHTML = additionalyLang;
                });
                allCurrentLanguage.forEach(function(item) {
                   item.innerHTML = currentLang;
                });
            }
            if(item.getAttribute('data-language') === 'en') {
                switchLanguage('ru','RU','EN');
            } else if(item.getAttribute('data-language') === 'ru') {
                switchLanguage('en','EN','RU');
            }
        })
    })
});