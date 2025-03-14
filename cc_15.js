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
        <button class="resolve-button">Resolve</button>
    `; 

    // Task 3: Modify addRiskItem to include a "Resolve" button
    const resolveButton = newRiskCard.querySelector(".resolve-button"); 

    // Task 3: When the button is clicked, remove the corresponding risk card
    resolveButton.addEventListener("click", () => {
        riskDashboard.removeChild(newRiskCard); 
    });

    // Modify addRiskItem to apply different background colors based on risk level
    if (riskLevel === "Low") { 
        newRiskCard.style.backgroundColor = "lightgreen"; // Low → Light Green
    } else if (riskLevel === "Medium") {
        newRiskCard.style.backgroundColor = "lightyellow"; // Medium → Light Yellow
    } else if (riskLevel === "High") {
        newRiskCard.style.backgroundColor = "#e14747"; // High → Light Red
    }
    
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


// Task 3: Removing Risk Items

// Test Case:
addRiskItem("Market Fluctuations", "High", "Finance");


// Task 4: Categorizing Risks by Level

// Test Case:
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

