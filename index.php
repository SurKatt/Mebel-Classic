<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    <meta name="description" content="МебельКлассик изготовит кухни, шкафы, шкафы купе и другую мебель на заказ по вашим размерам.">
    <meta name="keywords" content="МебельКлассик, мебель на заказ,  кухни на заказ, собственное производство, кухни на заказ, качественные материалы ">
    <meta property=“og:title” content="Главная">
    <meta property=“og:site_name” content="МебельКлассик">
    <meta property=“og:type” content="website">
    <meta property=“og:image” content=“http://example.com/картинка_статьи.jpg”>
    <meta property=“og:description” content="МебельКлассик - производство мебели на заказ по индивидуальным размерам">
    
    <?php wp_head() ?>
    
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">

    <title> МебельКлассик - изготовление мебели на заказ в Санкт-Петербурге</title>
    
</head>
<body>

        <header class="header">
        </header>
        <main class="main">                          
        </main>
        <footer class="footer">            
        </footer>
    </div>

    <!-- Modal Window -->
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
                            <div class="form__label">Прикрепить фото</div>
                            <div class="file">
                                <div class="file__item">
                                    <input id="formImage" accept=".jpg, .png, .gif" type="file" name="image" class="file__input">
                                    <div class="file__button">Выбрать</div>
                                </div>
                                <div id="formPreview" class="file__preview"></div>                                
                            </div>
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
     <?php wp_footer() ?>
</body>
</html>