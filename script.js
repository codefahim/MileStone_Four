// JavaScript Code Start From here
var total;
var subtotal;
var vat;
var economyClassSets;
var firstClassSets;

// FirstClass Sets coundown Claculation[plus]
const plusForFirstClass = document.getElementById('plus');
plusForFirstClass.addEventListener('click', function() {
    productCostHandle('firstClassInput', true);
    totalCostCalculation();
});

// FirstClass Sets coundown Claculation[minus]
const minusForFirstClass = document.getElementById('minus');
minusForFirstClass.addEventListener('click', function() {
    productCostHandle('firstClassInput', false);
    totalCostCalculation();
});

// EconomyClass Sets coundown Claculation[plus]
const plusEconomyClass = document.getElementById('plusOne');
plusEconomyClass.addEventListener('click', function() {
    productCostHandle('economyClassInput', true);
    totalCostCalculation();
});


// EconomyClass Sets coundown Claculation[minus]
const minusEconomyClass = document.getElementById('minusOne');
minusEconomyClass.addEventListener('click', function() {
    productCostHandle('economyClassInput', false);
    totalCostCalculation();
});



// Total Costing for FirstClass and EconomyClass Sets 


function totalCostCalculation() {
    let firstClassInput = document.getElementById('firstClassInput').value;
    firstClassSets = parseInt(firstClassInput);
    let firstCost = 150 * firstClassSets;


    let economyClassInput = document.getElementById('economyClassInput').value;
    economyClassSets = parseInt(economyClassInput);
    let economyCost = 100 * economyClassSets;
    subtotal = document.getElementById('subtotal').innerHTML;
    subtotal = firstCost + economyCost;
    document.getElementById('subtotal').innerHTML = subtotal;
    vat = subtotal * .1;
    document.getElementById('vat').innerHTML = vat;
    total = subtotal + vat;
    document.getElementById('total').innerHTML = total;

}

// Function for Sets incrise or decrise 

function productCostHandle(id, isIncrease) {
    let productQuantity = document.getElementById(id).value;
    let conformedSets = parseInt(productQuantity);
    if (isIncrease == true) {
        conformedSets++;
    }
    if (isIncrease == false) {
        if (conformedSets >= 1) {
            conformedSets--;
        }
    }

    document.getElementById(id).value = conformedSets;
};


// confirmation Booking

var conformText = document.getElementById('successText');


const bookingConfirmation = document.getElementById('bookNow');
bookingConfirmation.addEventListener('click', function() {
    let mainSection = document.getElementById('mainSection');
    mainSection.style.display = 'none';

    let confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    if (total >= 10) {
        document.getElementById('firstClassPassenger').innerHTML = firstClassSets;
        document.getElementById('economyClassPassenger').innerHTML = economyClassSets;
        document.getElementById('subCost').innerHTML = subtotal;
        document.getElementById('vatCost').innerHTML = vat;
        document.getElementById('totalCost').innerHTML = total;
        conformText.style.color = 'green';

    } else {
        const ticket = "Your tickets are not confirmed,Please Select a sets First.";
        conformText.innerHTML = ticket;
        conformText.style.color = 'red';
        conformText.style.fontSize = '21px';
    }




});



// Thank You