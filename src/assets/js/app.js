import fslightbox from 'fslightbox';
const blogItemTitle = document.querySelectorAll('.blog__table-item h3');

if (blogItemTitle) {
    blogItemTitle.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}