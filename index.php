<?php
if($_POST["message"]) {
    mail("barak.za@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
<!DOCTYPE html>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    sakldjfklaj
    <form action="index.php" method="post">
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="">
    </form>
</body>
</html>