<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$ip = $_SERVER ['REMOTE_ADDR'];

$to = '';
$subject = 'Бурение скважин';
$message = '
<!doctype html>
<html lang=ru>
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                         <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
  <table style="width: 780px">
    <tr style="background-color: #cecece;">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">Имя:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $name . '</td>
    </tr>
    <tr style="background-color: #e8e8e8;">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">Телефон:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $email . '</td>
    </tr>
    <tr style="background-color: #cecece">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">email:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $email . '</td>
    </tr>
    <tr style="background-color: #cecece">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">IP:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $ip . '</td>
    </tr>
  </table>
    
</body>
</html>
';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
header('Location: ../index.html');

mail($to, $subject, $message, $headers);
