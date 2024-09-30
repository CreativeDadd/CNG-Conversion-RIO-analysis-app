// function calculateROI() {
//     const cylinders = parseInt(document.getElementById('cylinder').value);
//     const kilometers = parseInt(document.getElementById('kilometers').value);
//     const cngPrice = parseFloat(document.getElementById('cng-price').value);
//     const petrolPrice = parseFloat(document.getElementById('petrol-price').value);
//     const conversionCost = parseFloat(document.getElementById('conversion-cost').value);

//     if (!cylinders || !kilometers || !cngPrice || !petrolPrice || !conversionCost) {
//         alert("Please fill out all fields correctly.");
//         return;
//     }

//     // Efficiency values
//     const petrolEfficiency = 10; // km per liter
//     const cngEfficiency = 16; // km per scm
//     const fuelIncreaseFactor = cylinders / 4; // consumption factor

//     // Petrol Consumption Calculation
//     const petrolUsedPerMonth = kilometers / petrolEfficiency * fuelIncreaseFactor;
//     const petrolCostPerMonth = petrolUsedPerMonth * petrolPrice;

//     // CNG Consumption Calculation
//     const cngUsedPerMonth = kilometers / cngEfficiency * fuelIncreaseFactor;
//     const cngCostPerMonth = cngUsedPerMonth * cngPrice;

//     // Monthly and total costs over 6 months
//     const petrolTotalCost6Months = petrolCostPerMonth * 6;
//     const cngTotalCost6Months = cngCostPerMonth * 6;

//     // Savings by using CNG
//     const savings = petrolTotalCost6Months - cngTotalCost6Months;
//     const roi = savings - conversionCost;

//     // Daily, weekly, and monthly savings
//     const savingsPerMonth = petrolCostPerMonth - cngCostPerMonth;
//     const savingsPerWeek = savingsPerMonth / 4;
//     const savingsPerDay = savingsPerMonth / 30;

//     // Breakeven time calculation (in months)
//     const breakevenTime = conversionCost / savingsPerMonth;

//     // Display results
//     document.getElementById('roi-output').textContent = ` NGN ${roi.toFixed(2)}`;
//     document.getElementById('savings-per-day').textContent = ` NGN ${savingsPerDay.toFixed(2)}`;
//     document.getElementById('savings-per-week').textContent = ` NGN ${savingsPerWeek.toFixed(2)}`;
//     document.getElementById('savings-per-month').textContent = ` NGN ${savingsPerMonth.toFixed(2)}`;
//     document.getElementById('breakeven-time').textContent = ` ${breakevenTime.toFixed(2)} months`;
// }





























// Strong password that is easy to remember for a coder
const fuelgetprice = "NGN910.";

// function checkPassword() {
//     const enteredKey = document.getElementById('access-key').value;

//     if (enteredKey === fuelgetprice ) {
//         document.getElementById('password-screen').style.display = 'none';
//         document.getElementById('password-screen').classList("password-screen").remove;
        
//         document.getElementById('app-screen').style.display = 'block';
//     } else {
//         document.getElementById('error-message').style.display = 'block';
//     }
// }




function checkPassword() {
    const enteredKey = document.getElementById('access-key').value;

    if (enteredKey === fuelgetprice) {
        // Hide the password screen
        document.getElementById('password-screen').style.display = 'none';

        // Remove the access-body element from the DOM
        const accessBody = document.querySelector('.access-body');
        if (accessBody) {
            accessBody.remove(); // Remove the access-body element
        }

        // Show the app screen
        document.getElementById('app-screen').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function calculateROI() {
    const cylinders = parseInt(document.getElementById('cylinder').value);
    const kilometers = parseInt(document.getElementById('kilometers').value);
    const cngPrice = parseFloat(document.getElementById('cng-price').value);
    const petrolPrice = parseFloat(document.getElementById('petrol-price').value);
    const conversionCost = parseFloat(document.getElementById('conversion-cost').value);

    if (!cylinders || !kilometers || !cngPrice || !petrolPrice || !conversionCost) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Efficiency values
    const petrolEfficiency = 10; // km per liter
    const cngEfficiency = 16; // km per scm
    const fuelIncreaseFactor = cylinders / 4; // consumption factor

    // Petrol Consumption Calculation
    const petrolUsedPerMonth = kilometers / petrolEfficiency * fuelIncreaseFactor;
    const petrolCostPerMonth = petrolUsedPerMonth * petrolPrice;

    // CNG Consumption Calculation
    const cngUsedPerMonth = kilometers / cngEfficiency * fuelIncreaseFactor;
    const cngCostPerMonth = cngUsedPerMonth * cngPrice;

    // Monthly and total costs over 6 months
    const petrolTotalCost6Months = petrolCostPerMonth * 6;
    const cngTotalCost6Months = cngCostPerMonth * 6;

    // Savings by using CNG
    const savings = petrolTotalCost6Months - cngTotalCost6Months;
    const roi = savings - conversionCost;

    // Daily, weekly, and monthly savings
    const savingsPerMonth = petrolCostPerMonth - cngCostPerMonth;
    const savingsPerWeek = savingsPerMonth / 4;
    const savingsPerDay = savingsPerMonth / 30;

    // Breakeven time calculation (in months)
    const breakevenTime = conversionCost / savingsPerMonth;

    // Display results
    document.getElementById('roi-output').textContent = ` NGN ${roi.toFixed(2)}`;
    document.getElementById('savings-per-day').textContent = ` NGN ${savingsPerDay.toFixed(2)}`;
    document.getElementById('savings-per-week').textContent = ` NGN ${savingsPerWeek.toFixed(2)}`;
    document.getElementById('savings-per-month').textContent = ` NGN ${savingsPerMonth.toFixed(2)}`;
    document.getElementById('breakeven-time').textContent = ` ${breakevenTime.toFixed(2)} months`;
}
