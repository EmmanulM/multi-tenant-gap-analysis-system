// =====================================
// DAY 5: EVIDENCE & GAP STATUS TRACKING
// =====================================

// We define ONE company for simplicity
let company = {
  // Company name
  name: "ABC Limited",

  // List of compliance requirements
  requirements: [
    {
      // Name of the requirement
      name: "Data Protection Policy",

      // Current compliance score
      currentScore: 2,

      // Target compliance score
      targetScore: 5,

      // Current status of the requirement
      // Open = gap exists
      // Pending = evidence uploaded, waiting review
      // Closed = gap resolved
      status: "Open",

      // Array to store evidence files
      evidence: []
    }
  ]
};

// =====================================
// STEP 1: CHECK IF THERE IS A GAP
// =====================================

// Get the first (and only) requirement
let requirement = company.requirements[0];

// Compare current score with target score
if (requirement.currentScore < requirement.targetScore) {
  console.log("❌ Gap detected for:", requirement.name);
} else {
  console.log("✅ Requirement is compliant");
}

// =====================================
// STEP 2: UPLOAD EVIDENCE (SIMULATION)
// =====================================

// Simulate uploading a file as evidence
requirement.evidence.push("data_protection_policy.pdf");

// Change status after evidence upload
requirement.status = "Pending";

// Confirm upload
console.log("📤 Evidence uploaded for:", requirement.name);

// =====================================
// STEP 3: DISPLAY CURRENT STATUS
// =====================================

console.log("\n--- CURRENT REQUIREMENT STATUS ---");
console.log("Company:", company.name);
console.log("Requirement:", requirement.name);
console.log("Status:", requirement.status);
console.log("Evidence Files:", requirement.evidence);
