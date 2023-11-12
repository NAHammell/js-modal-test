const container = document.querySelector('#modal-container');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', function() {
    container.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    container.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === container) {
        container.style.display = 'none';
    }
});