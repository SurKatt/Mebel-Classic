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
        <nav class="header__nav nav">
            <a href="/#" class="nav__link">Главная</a>
            <a href="/about" class="nav__link">О нас</a>
            <div class="dropdown">
                <a href="/catalog" class="nav__link">Каталог мебели</a>
                <div class="dropdown__content">
                    <a href="/kitchen" class="">Кухни</a>
                    <a href="/wardrobe" class="">Шкафы</a>
                    <a href="/commode" class="">Комоды</a>
                    <a href="/wardrobe-coupe" class="">Шкафы-купе</a>
                </div>
            </div>               
            <a href="/order" class="nav__link">Порядок работы</a>
            <a href="/news" class="nav__link">Новости</a>
            <a href="/feedback" class="nav__link">Отзывы</a>
            <a href="/contact" class="nav__link">Контакты</a>
        </nav> 
        <div class="company__info">            
            <a href="#" class="company__logo ">
                <svg width="115" height="101" viewBox="0 0 115 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M103.808 44V86H99.5477V52.4L83.0477 80.66H80.9477L64.4477 52.58V86H60.1877V44H63.8477L82.0877 75.14L100.148 44H103.808Z" fill="#D9D7D2"/>
                    <path d="M32.1899 38.26L23.6099 46.96V58H19.1699V16H23.6099V41.38L48.2699 16H53.3699L35.1899 35.02L54.6299 58H49.3499L32.1899 38.26Z" fill="#D9D7D2"/>
                </svg>
                <p class="company__logo__title company__item"> Мебель <br>на заказ</p>
            </a>            
            <div class="company__contact">
                <a href="tel: +79219389897" class="company__contact-phone company__item">+7 (921) 938-98-97</a>
                <a href="mailto: klassik.spb@yandex.ru" class="company__contact-email company__item">klassik.spb@yandex.ru</a>
            </div>
            
        </div>      
    </header>

    <main class="main">  
        <h1><?php the_title() ?>  </h1>                     
    </main>
    
    <footer class="footer">            
       

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