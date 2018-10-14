<?php
//Post data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

//Mail info
$dest = htmlspecialchars('lis.lightinsky@gmail.com');
$subject = 'Заявка с сайта '.$_SERVER['SERVER_NAME'];
$msg = htmlspecialchars("Пришла заявка с сайта $_SERVER[SERVER_NAME]:\n
Имя: $name\n
Номер телефона: $phone\n
Электронная почта: $email\n");


$response = 0;
if(isset($name) && isset($phone) && isset($email)) {
    if($name == '' || $phone == '' || $email == '') {
        $response = 'empty';
    } else {
        if(strlen($name) < 3 || strlen($phone) < 9 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response = 'incorrect';
        } else {
            $response = 'send';
            mail($dest, $subject, $msg, ['From' => "master@$_SERVER[SERVER_NAME]"]);
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