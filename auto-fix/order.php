<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$length = $_POST['length'];
$height = $_POST['height'];
$amount = $_POST['amount'];
$places = $_POST['difficult-places'];

$to = "fnalob@gmail.com, nalobhl720@gmail.com";
$subject = 'Рассчет стоимости | Заказ Ремонта Авто';
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
        <td style="padding: 10px 20px; width: 50%;">' . $phone . '</td>
    </tr>
    <tr style="background-color: #e8e8e8;">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">Длина:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $length . '</td>
    </tr>
    <tr style="background-color: #e8e8e8;">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">Высота:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $height . '</td>
    </tr>
    <tr style="background-color: #e8e8e8;">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">Количество:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $amount . '</td>
    </tr>
    <tr style="background-color: #e8e8e8;">
        <td style="padding: 10px 20px; text-align: right; font-weight: bold; width: 50%;">Труднодоступные места:</td>
        <td style="padding: 10px 20px; width: 50%;">' . $places . '</td>
    </tr>
  </table>
    
</body>
</html>
';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
header('Location: index.html');

mail($to, $subject, $message, $headers);
