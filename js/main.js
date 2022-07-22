// ===== Работа с верхним меню =====
window.addEventListener('scroll', ()=>{
    let scrollHeight = window.scrollY;
    if(scrollHeight > 0) {
        document.querySelector('.header__nav').style.zIndex = 5; 
        document.querySelector('.header__nav').style.position = 'fixed';      
    }
    else {
        document.querySelector('.header__nav').style.position = 'absolute';
    } 
});


// ===== Работа кнопки "Подробнее" в новостях =====

let moreElements = document.querySelectorAll(".more__btn");

function moreBtn(event){
    const target =  event.target;
    const classes = target.previousElementSibling;
    // console.log(target.parentElement.children);

    hiddenElements = target.parentElement.children;
    for (elem of hiddenElements) {
        for (el of elem.classList){
            if (el === 'news__hidden'){
                // console.log(elem);
                elem.classList.remove('news__hidden');
                elem.classList.add('news__show');
                elem.style.display = 'inline-block';
                target.textContent = 'Скрыть';
                target.parentElement.children[1].children[0].style.display = 'none';
                target.parentElement.children[1].children[1].style.display = 'inline';
            }
            else if (el === 'news__show'){
                elem.classList.add('news__hidden');
                elem.classList.remove('news__show');
                elem.style.display = 'none';
                target.textContent = 'Показать';
                target.parentElement.children[1].children[0].style.display = 'inline';
                target.parentElement.children[1].children[1].style.display = 'none';
            }
        }
    }
}

for (more of moreElements){
    more.addEventListener('click', moreBtn);
}

// ===== Работа слайдер "Отзывы"=====

let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider__line');
const btnPrev = document.querySelector('.slide_prev');
const btnNext = document.querySelector('.slide_next');

btnNext.addEventListener('click', () => {
    offset += 1200;
    if (offset > 1200*5){            // 1200 * (число слайдов - 1)
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

btnPrev.addEventListener('click', () => {
    offset -= 1200;    // ширина блока с комментарием, смотри css
    if (offset < 0){            
        offset = 1200*5;           // 1200 * (число слайдов - 1)
    }
    sliderLine.style.left = -offset + 'px';
})

// Каталог работ, работа с ссылами на адресами

let catalogLinks = document.querySelectorAll('.catalog__link');
let previewImages = document.querySelectorAll('.catalog__preview');

function activeImage(preview){
    document.body.onclick = (e) => {
        e = e || windows.event;
        if(e.target.classList.contains('catalog__mini__img')){
            let allImagesByAddress = preview.querySelectorAll('.catalog__mini__img');
            for (image of allImagesByAddress) {
                image.classList.remove('catalog__active');
            }
            preview.querySelector('.catalog__max__img').src = e.target.src;
            e.target.classList.add('catalog__active');
        }
    }
}

function catalogCloseBtn(preview){
    let btn = preview.querySelector('.catalog__mini__btn');    
    btn.addEventListener('click', () => {
        let images = preview.querySelectorAll('.catalog__mini__img')
        for (img of images){
            img.classList.remove('catalog__active');
        }
        images[0].classList.add('catalog__active');
        btn.closest('.catalog__preview').classList.add('catalog__hidden');
    })   
}

for (link of catalogLinks) {
    link.addEventListener('click', (e) => {        
        e.preventDefault();
        let currentLink = e.target.parentElement;
        let address = currentLink.dataset.address;        
        for (preview of previewImages) {
            let image = preview.dataset.link;   
            if (address == image){  
                catalogCloseBtn(preview);
                activeImage(preview);                                        
                preview.classList.remove('catalog__hidden');                              
            }            
            else {    
                preview.classList.add('catalog__hidden');                
            }                   
        }   
    })    
}






// ===== Работа с модальным окном (открытие/закрытие) =====

const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(modalLinks.length > 0){
    for (let i = 0; i < modalLinks.length; i++){
        const modalLink = modalLinks[i];
        modalLink.addEventListener('click', function(e){
            const modalName = modalLink.getAttribute('name').replace('#', '');
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}
const modalCloseIcon = document.querySelectorAll('.close-modal');
if (modalCloseIcon.length > 0) {
    for (let i = 0; i < modalCloseIcon.length; i++){
        const el = modalCloseIcon[i];
        el.addEventListener('click', function (e){
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}
function modalOpen(currentModal){
    if (currentModal && unlock){
        const modalActive = document.querySelector('.modal-open');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        } 
        currentModal.classList.add('open');
        currentModal.addEventListener('click', function(e){
            if(!e.target.closest('.modal__content')){
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}

function modalClose(modalActive, doUnlock = true){
    if (unlock) {
        modalActive.classList.remove('open');        
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    let lockPaddingValue = window.innerWidth - document.querySelector('html').offsetWidth + 'px';
    if (lockPadding.length > 0){
        for (let i = 0; i < lockPadding.length; i++){
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');
    
        unlock = false;
        setTimeout(function(){
            unlock = true;
        }, timeout);        
}

function bodyUnLock(){
    setTimeout(function (){
        if (lockPadding.length > 0){
            for (let i = 0; i < lockPadding.length; i++){
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }        
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e){
    if (e.which === 27){
        const modalActive = document.querySelector('.modal.open');
        modalClose(modalActive);
    }
});


// // ===== Работа с формой (модальное окно) =====
const form = document.querySelector('#form');
form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);
    formData.append('image', formImage.files[0]);

    if(error === 0){
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: POST,
            body: formData
        });
        if (response.ok){
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
        } else{
            alert('Ошибка');
        }
    } else{
        alert('Заполните поля');
    }
}

function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++){
        const input = formReq[i];
        formremoveError(input);

        if(input.classList.contains('_email')){
            if(emailTest(input)){
                formAddError(input);
                error++;
            } 
        } else if(input.classList.contains('_phone')){
            if(phoneTest(input)){
                formAddError(input);
                error++;
            } 
        }         
        else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }        
    }
    return error;
}

function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formremoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
// === Функция проверки email
function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
// === Функция проверки телефона
function phoneTest(input){
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
}

// === Работа с превью картинки
// const formImage = document.getElementById('formImage');
// const formPreview = document.getElementById('formPreview');

// formImage.addEventListener('change', () => {
//     uploadFile(formImage.files[0]);
// });

// function uploadFile(file){
//     if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
//         alert('Разрешены только изображения');
//         formImage.value = '';
//         return;
//     }
//     if (file.size > 5 * 1024 * 1024){
//         alert('Файл должен быть менее 5Мб');
//         return;
//     }


//     var reader = new FileReader();
//     reader.onload = function (e) {
//         formPreview.innerHTML = `<img src="${e.target.result}" alt="photo">`;
//     };
//     reader.onerror = function (e) {
//         alert ('Ошибка');
//     };
//     reader.readAsDataURL(file);
// }