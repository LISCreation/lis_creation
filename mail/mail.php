<?php

//Namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Require
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Mail data
$name = $_POST['name'];
$phone = $_POST['phone'] != '' ? $_POST['phone'] : false;
if($phone == false) {
    $hint = true;
    $phone = 'Отсутствует';
}
$email = $_POST['email'];

//Construction
$msg = "
<html>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    <style type='text/css'>
        table {
            color: #fff;
        }
        table, th, td {
            padding: 5px;
            border-radius: 5px;
        }
        h3 {
            background: #5313b8;
        }
        h3 > a {
            color: #fff;
        }
        .hint {
            display: inline-block;
            margin: 5px;
            padding: 5px;
            font-size: 12px;
            color: gray;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    Заявка с сайта <a href='http://lis-creation.pro'>lis-creation.pro</a>
    Откройте описание
    <table border='1' bgcolor='#5313b8'>
        <tr>
            <th>Тип заявки</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>Обратный звонок</td>
            <td>$name</td>
            <td>$phone</td>
            <td>$email</td>
        </tr>
    </table>";
if($hint) {
    $msg .= "<div class='hint'>*При отсутствии телефона требуется связаться с заказчиком по эл. почте*</div>";
}
$msg .= "</body></html>";

//Condition
$response = 0;
if(isset($name) && isset($phone) && isset($email)) {
    if($name == '' || $email == '') {
        $response = 'empty';
    } else {
        if(strlen($name) < 3 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response = 'incorrect';
        } else {
            //Mail
            $mail = new PHPMailer(true);
            $mail->CharSet = 'utf-8';

            $mail->isSMTP();
            $mail->SMTPAuth = true;
            $mail->Host = 'smtp.mail.ru';
            $mail->Port = 465;
            $mail->SMTPSecure = 'ssl';
            $mail->Username = 'lis-creation@mail.ru';
            $mail->Password = '05x22003l';
            $mail->SetFrom('lis-creation@mail.ru', 'Бот рассылки LIS');
            $mail->AddAddress('lis.lightinsky@gmail.com', 'Gromov Alex');
            $mail->Subject = 'Поступила заявка с сайта lis-creation.pro';
            $mail->MsgHTML($msg);
            if($mail->send()) {
                $response = 'send';
            } else {
                $response = 'error';
            }
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
    case 'error':
        echo "<p class='bad'>Непонятная ошибка! Пожалуйста, сообщите нам!</p>";
        break;
    case 'send':
        echo "<p class='good'>Спасибо за заявку! Ждите звонка!</p>";
}