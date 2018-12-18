var TAX_RATE = 0.08;
var PHONE_PRICE = 99.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	// write your code here
}

function formatAmount(amount) {
	// write your code here;
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// write your code here;
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
	"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase. :("
	);
}
// You can't afford this purchase. :(