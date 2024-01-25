// for(var s ; s>101 ;s++)
// {console.log(s)}


function calculateAmountAfterOneYear(Amount) {
  var total = 0;
  var tax = 0.2;

  if (Amount > 10000) {
    total = Amount + (Amount * 0.07) - (Amount * tax / 100);
  } else {
    total = Amount + (Amount * 0.05) - (Amount * tax / 100);
  }

  return total;
}

// Usage example:
var amount = parseFloat(prompt("Enter the amount to open an annual account:"));
var result = calculateAmountAfterOneYear(amount);
console.log("Amount after one year:", result);