const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnOpen = $('.open-modal-btn');
const modal = $('.modal');
const iconClose  = $('.modal__header i')
const btnClose = $('.modal__footer button');

function toggleModal(e){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})