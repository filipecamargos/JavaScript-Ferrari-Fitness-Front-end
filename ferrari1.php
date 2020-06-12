<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FF | Payment Process</title>
    <link rel="stylesheet" type="text/css" href="sources/page.css">
    <link rel="stylesheet" type="text/css" href="sources/php1.css">
</head>

<body>
    <header>
        <div id="log">
            <img id="logopic" src="images/logo.png" alt="logo">
            <h1 id="messagethank">FERRARI FITNESS</h1>
        </div>
    </header>
    <main>
        <div class="product" id="userInformation">
            <h2>Confirm Payment</h2>
            <?php

            //Get all the information needed
            $name = $_POST["first_name"];
            $lastName = $_POST["last_name"];
            $adress = $_POST["address"];
            $phone = $_POST["phone"];
            $card = $_POST["card"];
            $cardNumber = $_POST["credit_card"];
            $cardExpiration = $_POST["exp_date"];
            $total = $_POST["total"];


            //User Information
            echo '<h4>' . $name . ' ' . $lastName . '<br>'
                . $adress .  '<br>'
                . $phone . '<br><br>'
                . $card . ' ' . $cardExpiration . '<br>'
                . $cardNumber . '</4>';

            //List of Items 
            $selectedItems = $_POST["item"];

            echo '<h4>Items:</h4>';
            foreach ($selectedItems as $selected)
                echo "<h4> $selected </h4>";

            //total
            echo '<h4>Total:&nbsp;&nbsp;' . $total . '</h4>';

            echo '<form action="ferrari2.php" action="GET">
                    <button type="submit" name="check" value="paid" id="confirmPay">Confirm</button>
                    <button type="submit" name="check" value="canceled" id="cancelPay">Cancel</button>
                  </form>'
            ?>


        </div>
    </main>
</body>

</html>