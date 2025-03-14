// Task 1: Creating the Base Structure

// Select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");

// Print message to the console
console.log("Risk Dashboard Loaded");


// Task 2: Adding Risk Items Dynamically

// Create function addRiskItem
function addRiskItem(riskName, riskLevel, department) {
    const newRiskCard = document.createElement("div");

    // Assigns a class "riskCard" to each card
    newRiskCard.classList.add("riskCard"); 

    // Add content to risk card 
    newRiskCard.innerHTML = ` 
        <strong>Risk:</strong> ${riskName} <br>
        <strong>Level:</strong> ${riskLevel} <br>
        <strong>Department:</strong> ${department}
    `; 

    // Appends risk card to the riskDashboard
    riskDashboard.appendChild(newRiskCard); 
}

// Allow users to input a new risk using an HTML form
const riskForm = document.getElementById("addRisk-form");
const riskInput = document.getElementById("riskInput");
const riskLevelInput = document.getElementById("riskLevel"); 
const departmentInput = document.getElementById("department");

riskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    // Get the values from the input fields
    const riskName = riskInput.value.trim();
    const riskLevel = riskLevelInput.value.trim(); 
    const department = departmentInput.value.trim(); 

    // Ensure that all fields are filled out before adding the risk item
    if (riskName && riskLevel && department) {
        addRiskItem(riskName, riskLevel, department);

        // Clear the input fields after submission
        riskInput.value = "";
        riskLevelInput.value = ""; 
        departmentInput.value = ""; 
    } else {
        alert("Please fill in all fields (Risk Name, Risk Level, Department).");
    }
});

// Test Case:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

