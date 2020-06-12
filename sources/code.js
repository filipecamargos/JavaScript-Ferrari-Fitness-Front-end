//Handle the checkbox events
var valueItem_0 = document.getElementById("item_0");
valueItem_0.addEventListener("change", addTotal);

var valueItem_1 = document.getElementById("item_1");
valueItem_1.addEventListener("change", addTotal);

var valueItem_2 = document.getElementById("item_2");
valueItem_2.addEventListener("change", addTotal);

var valueItem_3 = document.getElementById("item_3");
valueItem_3.addEventListener("change", addTotal);

var valueItem_4 = document.getElementById("item_4");
valueItem_4.addEventListener("change", addTotal);

var valueItem_5 = document.getElementById("item_5");
valueItem_5.addEventListener("change", addTotal);

//Caculates the total
function addTotal() {
    let total = 0;

    if (valueItem_0.checked == true) { total += 300; }

    if (valueItem_1.checked == true) { total += 200; }

    if (valueItem_2.checked == true) { total += 150; }

    if (valueItem_3.checked == true) { total += 45; }

    if (valueItem_4.checked == true) { total += 200; }

    if (valueItem_5.checked == true) { total += 899; }

    //Display Total
    document.getElementById("total").value = " $ " + total + ".00";
}

//Get the document to change the picture
document.getElementById("pay").addEventListener("click", checkOut);
document.getElementById("cancel-pay").addEventListener("click", cancelShopping);


//Normalize validation for the form so everything is set as default for checkers
function normalize() {
    let checkers = document.getElementsByClassName("checkMark");
    for (let i = 0; i < checkers.length; i++) {
        checkers[i].style.display = "none";
    }

    document.getElementById("fitgirls").src = "images/becomingpic.jpg";
}

//Chane the Page for payment
function checkOut() {

    //get total
    let total = document.getElementById("total").value;

    //Force the user to have at least one Item
    if (valueItem_0.checked == false && valueItem_1.checked == false && valueItem_2.checked == false &&
        valueItem_3.checked == false && valueItem_4.checked == false && valueItem_5.checked == false) {
        document.getElementById("message1").innerHTML = " Select Your Items";
        return
    } else {
        document.getElementById("message1").innerHTML = "";
        document.getElementById("pay-info").style.display = "block";
        document.getElementById("adds1").style.display = "none";
        document.getElementById("pay").style.backgroundColor = "#454756";
        document.getElementById("fitgirls").src = "images/becomingfrong.jpg";

    }
}


//Phone Number Validator
var phoneNumber = document.getElementById("phone");
phoneNumber.addEventListener("change", phoneValidator);

//This function will validate the phone
function phoneValidator() {

    //Expression
    let phoneMacth = /^\d\d\d-\d\d\d-\d\d\d\d$/;
    //Get the element that display a check
    var phoneElementChecker = document.getElementById("phoneChecked");

    //Check if is a valide phone
    let phoneElemetCheker = document.getElementById("phoneChecked");

    if (phoneMacth.test(phoneNumber.value)) {
        phoneElementChecker.src = "images/checkmark.png"
        phoneElemetCheker.style.display = "inline";
        document.getElementById("message2").style.visibility = "hidden";
        return true;
    } else if (!(phoneMacth.test(phoneNumber.value))) {
        phoneElementChecker.src = "images/erromarked.png";
        phoneElemetCheker.style.display = "inline";
        document.getElementById("message2").style.visibility = "visible";
        return false;
    }
}


//Cacel the Shopping and Return to Original Display
function cancelShopping() {
    document.getElementById("pay-info").style.display = "none";
    document.getElementById("adds1").style.display = "block";
    document.getElementById("pay").style.backgroundColor = "#25A1D0";
    //Call the normalization of the form
    normalize();

}

//This will validate First Name, Last Name Adress if is filled up
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var address = document.getElementById("address");

firstName.addEventListener("change", function() {
    validateCharacters(document.getElementById("nameChecked"));
});

lastName.addEventListener("change", function() {
    validateCharacters(document.getElementById("lastNameChecked"));
});

address.addEventListener("change", function() {
    validateCharacters(document.getElementById("addressChecked"));
});

//This Function only validate alert for empty so any value is valid
function validateCharacters(userImput) {
    if (firstName.value.length > 0) {
        userImput.src = "images/checkmark.png"
        userImput.style.display = "inline";
        return true;
    } else {
        userImput.src = "images/erromarked.png";
        userImput.style.display = "inline";
        return false;
    }
}

//Credid Card Validator
var crediCard = document.getElementById("credit_card");
crediCard.addEventListener("change", crediCardValidator);
var validatorCardChecker = document.getElementById("cardChecked");

//Function to validate Credit Card Number
function crediCardValidator() {

    //get the patter
    let cardPatter = /^\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d$/;
    //Condition to check
    if (cardPatter.test(crediCard.value)) {
        validatorCardChecker.src = "images/checkmark.png"
        validatorCardChecker.style.display = "inline";
        document.getElementById("message3").style.visibility = "hidden";
        return true;
    } else if (!(cardPatter.test(crediCard.value))) {
        validatorCardChecker.src = "images/erromarked.png";
        validatorCardChecker.style.display = "inline";
        document.getElementById("message3").style.visibility = "visible";
        return false;
    }
}

//Date Validator
var expDate = document.getElementById("exp_date");
expDate.addEventListener("change", validadeDate);
var dateChecker = document.getElementById("dateChecked");

function validadeDate() {
    let datePatter = /^([1-9]|0[1-9]|1[0-2])\/2\d2\d$/;

    if (datePatter.test(expDate.value)) {
        dateChecker.src = "images/checkmark.png"
        dateChecker.style.display = "inline";
        document.getElementById("message4").style.visibility = "hidden";
        return true;
    } else if (!(datePatter.test(expDate.value))) {
        dateChecker.src = "images/erromarked.png";
        dateChecker.style.display = "inline";
        document.getElementById("message4").style.visibility = "visible";
        return false;
    }
}


var subButton = document.getElementById("pay-button");
subButton.addEventListener("click", submitionChecker);
var messageThanks = document.getElementById("thankYou");

//Final Formula Validtor Submition
function submitionChecker() {

    if (!theForm.checkValidity() || !(validadeDate()) || !(crediCardValidator()) ||
        !(phoneValidator())) {
        document.getElementById("theForm").reportValidity();
    } else {
        document.getElementById("theForm").submit();
    }
}