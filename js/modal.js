const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close');

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

closeModalBtn.onclick = closeModal;

function showModalOnScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        window.removeEventListener('scroll', showModalOnScroll);
    }
}

window.addEventListener('scroll', showModalOnScroll);


setTimeout(openModal, 10000);
