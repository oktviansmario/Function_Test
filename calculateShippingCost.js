function calculateShippingCost(destination, weight, priority) {
  // Validate destination
  // Rule 1. If destination is not "domestic" or "international", return "Invalid destination".
  if (destination !== "domestic" && destination !== "international") {
    return "Invalid destination";
  }

  // Validate weight
  // Rule 2. If weight is less than or equal to 0, return "Invalid weight".
  if (weight <= 0) {
    return "Invalid weight";
  }

  // Validate priority
  // Rule 3. If priority is not one of "standard", "express", or "priority", return "Invalid priority".
  if (
    priority !== "standard" &&
    priority !== "express" &&
    priority !== "priority"
  ) {
    return "Invalid priority";
  }

  // Initialize cost
  let baseCostPerKg;
  let additionalCost = 0;

  if (destination === "domestic") {
    if (priority === "standard") {
      baseCostPerKg = 5;
    } else if (priority === "express") {
      baseCostPerKg = 10;
    } else if (priority === "priority") {
      baseCostPerKg = 20;
    }

    if (weight > 10) {
      additionalCost = 10;
    }
  } else if (destination === "international") {
    if (priority === "standard") {
      baseCostPerKg = 15;
    } else if (priority === "express") {
      baseCostPerKg = 25;
    } else if (priority === "priority") {
      baseCostPerKg = 50;
    }

    if (weight > 5) {
      additionalCost = 50;
    }
  }

  // Calculate the total cost
  let totalCost = baseCostPerKg * weight + additionalCost;
  return `$${totalCost.toFixed(2)}`;
}

// Function test

// Invalid input
console.log(calculateShippingCost("domestic", -1, "express"));
// Calculate the total cost
console.log(calculateShippingCost("domestic", 4, "priority"));
console.log(calculateShippingCost("domestic", 7, "standard"));
console.log(calculateShippingCost("international", 8, "priority"));
console.log(calculateShippingCost("international", 15, "express"));
console.log(calculateShippingCost("international", 1, "standard"));
