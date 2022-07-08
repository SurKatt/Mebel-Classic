<div id="modal-header" class="modal">
    <div class="modal__body">
        <div class="modal__content form">
            <a href="#" class="modal__close close-modal">X</a>
            <!-- <h2 class="modal__title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
            <p class="modal__text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, praesentium harum autem, maxime eos repellat sequi rerum ea quas ad facilis ipsum doloribus! Ut, delectus sint modi aperiam pariatur soluta!</p> -->
            <form action="#" method="POST" id="form" class="modal__form form__body">
                <h2 class="form__title">Отправка данных на почту</h2>
                <div class="form__item">
                    <label for="formName" class="form__label ">Имя*</label>
                    <input type="text" name="name" id="formName" class="form__input _req">
                </div>
                <div class="form__item">
                    <label for="formEmail" class="form__label">E-mail*</label>
                    <input type="text" name="email" id="formEmail" class="form__input _req _email">
                </div>
                <div class="form__item">
                    <label for="formPhone" class="form__label">Телефон*</label>
                    <input type="text" name="phone" id="formPhone" class="form__input _req _phone">
                </div>
                <div class="form__item">
                    <label for="formMessage" class="form__label">Сообщение:</label>
                    <textarea name="message" id="formMessage" class="form__input" cols="30" rows="10"></textarea>
                </div>
                <div class="form__item">
                    <!-- <div class="form__label">Прикрепить фото</div>
                    <div class="file">
                        <div class="file__item">
                            <input id="formImage" accept=".jpg, .png, .gif" type="file" name="image" class="file__input">
                            <div class="file__button">Выбрать</div>
                        </div>
                        <div id="formPreview" class="file__preview"></div>                                
                    </div> -->
                    <div class="form__item">
                        <div class="checkbox">
                            <input type="checkbox" name="agreement" id="formAgreement" class="checkbox__input _req">
                            <label for="formAgreement" class="checkbox__label "><span>Я даю свое согласие на обработку персональных данных в соответствии с <a href="#">Условиями</a></span></label>
                        </div>
                    </div>
                </div>
                <button class="form__button" type="submit" id="btn_modal">Отправить</button>
            </form>
        </div>
    </div>
</div>