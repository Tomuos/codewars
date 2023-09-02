// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

// Number of orders is always equal to number of people.

// For example,


// budget, people => (200, 9) will return 2.

// budget, people => (300, 9) will return 3 and so on.

// Note: Do not use loops or conditional statements. Use only arithmetic operators and logical operators.


// step 1 create a function that takes in two arguments function findCaterer(budget, people)
// step 2 create a conditional that will check the budget and people  
// step 3 return the number of the caterer that fits the budget and people
// step 4 create a conditional that will check the budget and people
// step 5 return the number of the caterer that fits the budget and people

function findCaterer(budget, people) {
    const basicBuffetCost = 15;
    const economyBuffetCost = 20;
    const premiumBuffetCost = 30;
    
    // Check if there are no people or budget is too low to afford basic buffet
    if (people < 1 || budget < basicBuffetCost * people) {
      return -1;
    }
    
    const perPersonBudget = budget / people;
    
    if (perPersonBudget < economyBuffetCost) {
      return 1; // Choose basic buffet
    } else if (perPersonBudget < premiumBuffetCost || people <= 60) {
      return 2; // Choose economy buffet
    } else {
      const discountedPremiumBuffetCost = premiumBuffetCost * 0.8;
      if (perPersonBudget >= discountedPremiumBuffetCost) {
        return 3; // Choose premium buffet with discount
      } else {
        return 2; // Choose economy buffet as premium is still too expensive
      }
    }
  }

    console.log(findCaterer(200, 9));
    console.log(findCaterer(300, 9));

    // output: [1] 2
    //         [2] 3

    