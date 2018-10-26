<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

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
$mail->MsgHTML("
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
	</style>
</head>
<body>
	Заявка с сайта <a href='http://lis-creation.pro'>lis-creation</a>
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
	</table>
</body>
</html>
");
if($mail->send()) :
	echo "Сообщение отправлено!";
else :
	echo "Не отправлено";
endif; 