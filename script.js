// JavaScript Code Start From here

// FirstClass Sets coundown Claculation[plus]
const plusForFirstClass = document.getElementById('plus');
plusForFirstClass.addEventListener('click',function(){
productCostHandle('firstClassInput',true);
totalCostCalculation();
});

// FirstClass Sets coundown Claculation[minus]
const minusForFirstClass = document.getElementById('minus');
minusForFirstClass.addEventListener('click',function(){
productCostHandle('firstClassInput', false);
totalCostCalculation();
});

// EconomyClass Sets coundown Claculation[plus]
const plusEconomyClass = document.getElementById('plusOne');
plusEconomyClass.addEventListener('click',function(){
productCostHandle('economyClassInput',true);
totalCostCalculation();
});


// EconomyClass Sets coundown Claculation[minus]
const minusEconomyClass = document.getElementById('minusOne');
minusEconomyClass.addEventListener('click',function(){
productCostHandle('economyClassInput',false);
totalCostCalculation();
});



// Total Costing for FirstClass and EconomyClass Sets 

function totalCostCalculation(){
	let firstClassInput = document.getElementById('firstClassInput').value;
	let firstClassSets = parseInt(firstClassInput);
	let firstCost = 150* firstClassSets;


	let economyClassInput = document.getElementById('economyClassInput').value;
	let economyClassSets = parseInt(economyClassInput);
	let economyCost = 100 * economyClassSets;

	let subtotal = document.getElementById('subtotal').innerHTML ;
	subtotal = firstCost+economyCost;

document.getElementById('subtotal').innerHTML = subtotal;
 let vat = subtotal*.1;
document.getElementById('vat').innerHTML = vat;
let total =subtotal+vat;

document.getElementById('total').innerHTML = total;
	
}

// Function for Sets incrise or decrise 

function productCostHandle(id,isIncrease){
let productQuantity = document.getElementById(id).value;
let conformedSets = parseInt(productQuantity);
if (isIncrease == true){
	conformedSets++;
}
if (isIncrease == false){
	if(conformedSets >=1){
		conformedSets--;	
	}
}
        
document.getElementById(id).value=conformedSets;
};


// confirmation Booking
const total = document.getElementById('total').innerHTML;


const bookingConfirmation = document.getElementById('bookNow');
bookingConfirmation.addEventListener('click',function(){
	let mainSection =document.getElementById('mainSection');
	mainSection.style.display = 'none';

	let confirmation =document.getElementById('confirmation');
	confirmation.style.display = 'block';

 const firstClassPassenger =document.getElementById('firstClassInput').value;
document.getElementById('firstClassPassenger').innerHTML=firstClassPassenger;

const economyClassPassenger =document.getElementById('economyClassInput').value;
document.getElementById('economyClassPassenger').innerHTML=economyClassPassenger;

	const subCost =document.getElementById('subtotal').innerHTML;
	document.getElementById('subCost').innerHTML= subCost;

	const vatCost =document.getElementById('vat').innerHTML;
	document.getElementById('vatCost').innerHTML =vatCost;

	const total = document.getElementById('total').innerHTML;
	document.getElementById('totalCost').innerHTML=total;


});



// Thank You