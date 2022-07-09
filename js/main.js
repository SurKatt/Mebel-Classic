// ===== Работа верхним меню =====
window.addEventListener('scroll', ()=>{
    let scrollHeight = window.scrollY;
    if(scrollHeight >= 0) {
        document.querySelector('.header__nav').style.zIndex = 5; 
        document.querySelector('.header__nav').style.position = 'fixed';      
    }
    else {
        document.querySelector('.header__nav').style.position = 'absolute';
    } 
});






// // ===== Работа с модальным окном (открытие/закрытие) =====

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