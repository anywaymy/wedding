document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let loader = document.querySelector('.loader');
        let body = document.querySelector('body');
        body.style.overflowY="visible";
        loader.classList.add('disabled');
        AOS.refresh();
    },3000);
})