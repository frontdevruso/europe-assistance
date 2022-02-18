document.addEventListener('DOMContentLoaded', function() {
    const cookieAgree = document.getElementById('cookieAgreeBtn');
    const cookieClose = document.getElementById('cookieCloseBtn');

    const cookieModal = document.querySelector('.cookies');

    let closeCookieModal = () => {
        cookieModal.classList.toggle('cookies--open');
    }

    cookieAgree.addEventListener('click', function() {
        // HERE SHOULD BE ON AGREE CODE
        closeCookieModal();
    });

    cookieClose.addEventListener('click', function() {
        closeCookieModal();
    });
});
