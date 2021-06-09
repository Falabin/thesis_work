<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
//    $count = $_POST['count'];
    $phone = $_POST['phone'];
//    $time = $_POST['time'];

    // создаем переменную с содержанием письма
    $content = $name . ' оставил заявку на бронирование занятия ' . ' Его телефон: ' . $phone;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("admin@yogaclub.com ", 'Запрос на бронирование занятия', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}

//заказ формы в последнем блоке
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name-1'];
    $phone = $_POST['phone-1'];

    // создаем переменную с содержанием письма
    $content = $name . ' оставил заявку на бронирование занятия ' . ' Его телефон: ' . $phone;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("admin@yogaclub.com ", 'Запрос на бронирование занятия', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}

//заказ звонка
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $phone = $_POST['phone-2'];

    // создаем переменную с содержанием письма
    $content = ' Телефон клиента: ' . $phone;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("callme@yogaclub.com ", 'Запрос на бронирование занятия', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}