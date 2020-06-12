<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FF | Payment Confirmation</title>
    <link rel="stylesheet" type="text/css" href="sources/page.css">
    <link rel="stylesheet" type="text/css" href="sources/php2.css">
</head>

<body>
    <header>
        <div id="log">
            <img id="logopic" src="images/logo.png" alt="logo">
            <h1 id="messagethank">FERRARI FITNESS</h1>
        </div>
    </header>

    <?php

    if ($_GET["check"] == "paid") {
        echo '<div id="finalMessage"> <h2>Thank You For Choosing Ferrari Fitness 
                Your Purchase Has Been Confirmed </h2></div>
               <div id="heart">
               <img src="images/logofinal.png" alt="Thank Heart">
               </div>';
    } elseif ($_GET["check"] == "canceled"){
        echo '<div id="finalMessage"> <h2>Your Purchase Has Been Canceled</h2></div>
        <div id="heart">
        <h3>Back to Shopping</h3>
        <a href="assign.12.html"><img src="images/cart.png" alt="Cart to Home"></a>
        </div>';
    }

    ?>
</body>

</html>