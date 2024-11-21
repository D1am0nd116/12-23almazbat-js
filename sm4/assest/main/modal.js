const clear=document.getElementById('button');
const openmodalbtn=document.getElementById('modal-button');
const modal=document.querySelector('.modal');
const closemodalbtn=document.querySelector('.close-modal');
const wrapper=document.querySelector('.wrapper');

function clearWrapper(){
    while (wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
}

function openmodal (){
    modal.classList.add('open');
}

function closemodal(){
    modal.classList.remove('open');
}

clear.addEventListener('click',clearWrapper);
openmodalbtn.addEventListener('click',openmodal);
closemodalbtn.addEventListener('click',closemodal);