// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector(".callTotalTwo");
var callTotalTwo = document.querySelector(".smsTotalTwo");
var callTotalTwo = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed
var sms = 0;
var call = 0;
var total = 0;
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    var billTypeEntered = billTypeText.value;
    var bill = billTypeEntered.trim();
    // update the correct totarl
    if (bill === "call") {
        call += 2.75;
        total += 2.75;
        console.log(call)
    } else if (bill === "sms") {
        sms += 0.75;
        total += 0.75;
        console.log(sms)

    }
    callsTotalElem.innerHTML = call.toFixed(2);
    smsTotalElem.innerHTML = sms.toFixed(2);
    TotalElem.innerHTML = total.toFixed(2);
}
addToBillBtn.addEventListener('click', textBillTotal);