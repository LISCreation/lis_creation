<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
// 0 - Поля не заполнены
// 2 - Поле с номером заполнено не правильно
// 3 - Поле с почтой заполнено не правильно
// 4 - Отправка
$response = 0;
if(isset($name) && isset($phone) && isset($email)) {
    if($name == '' || $phone == '' || $email == '') {
        $response = 'empty';
    } else {
        if(strlen($name) < 3 || strlen($phone) < 9 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response = 'incorrect';
        } else {
            $response = 'send';
        }
    }
}
switch($response) {
    case 'empty':
        echo "<p class='bad'>Хорошая попытка! Но для начала заполните поля.</p>";
        break;
    case 'incorrect':
        echo "<p class='bad'>Некоторые поля заполнены не правильно, проверьте правильность!</p>";
        break;
    case 'send':
        echo "<p class='good'>Спасибо за заявку! Ждите звонка!</p>";
}
?>