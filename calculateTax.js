function calculateTax(income, age, dependents) {
  // -- Check inputs for income, age, and dependents
  // Rule 1. If income is less than 0 or not a number, return "Invalid income".
  if (typeof income !== "number" || income < 0) {
    return "Invalid income"; 
  }
  // Rule 2. If age is less than 0 or not a number, return "Invalid age".
  if (typeof age !== "number" || age < 0) {
    return "Invalid age"; 
  }
  // Rule a. If the age is less than 18, return "Not eligible for tax".
  else if (age < 18) {
    return "Not eligible for tax";
  }
  // Rule 3. If dependents is less than 0 or not a number, return "Invalid dependents".
  if (typeof dependents !== "number" || dependents < 0) {
    return "Invalid dependents"; 
  }
  // --

  // Tax Rate for annual tax calculation
  let taxRate;

  if (age >= 65) {
    taxRate = 0.8; // Rule b. If the age is 65 or older, the individual gets a 20% tax discount.
  } else if (income <= 10000) {
    taxRate = 0.1; // Rule c. If the income is less than or equal to $10,000, the tax is 10% of the income.
  } else if (income <= 50000) {
    taxRate = 0.2; // Rule d. If the income is between $10,001 and $50,000, the tax is 20% of the income. 
  } else {
    taxRate = 0.3; // Rule e. If the income is more than $50,000, the tax is 30% of the income.
  }

  // Calculate initial tax before deductions
  let initialTax = income * taxRate;

  // Rule f. For each dependent, the individual gets a $500 tax deduction.
  let dependentDeduction = dependents * 500;

  // Calculate final annual tax
  let finalTax = Math.max(0, initialTax - dependentDeduction); // Rule g. The minimum tax is $0 (no negative tax). 

  return `$${finalTax.toFixed(2)}`;
}

// Function test

// Invalid input & not eligible
console.log(calculateTax(-10000, 30, 1)); 
console.log(calculateTax(20000, 65, -2)); 
console.log(calculateTax(10000, -30, 3)); 
console.log(calculateTax(5000, 16, 0)); 
// Calculate tax
console.log(calculateTax(80000, 32, 2)); 
console.log(calculateTax(100000, 66, 4)); 

