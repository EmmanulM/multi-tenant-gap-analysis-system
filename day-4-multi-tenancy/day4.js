// ===============================
// DAY 4: MULTI-TENANT GAP ANALYSIS
// ===============================

// Array that stores ALL companies using the system
// Each company is a "tenant"
let companies = [
  {
    // Unique ID for the company
    id: 1,

    // Company name
    name: "ABC Limited",

    // List of requirements/policies for this company
    requirements: [
      {
        // Name of the policy or standard
        name: "Data Protection Policy",

        // Current compliance score
        currentScore: 2,

        // Required (target) compliance score
        targetScore: 5
      },
      {
        name: "Access Control",
        currentScore: 4,
        targetScore: 5
      }
    ]
  },
  {
    id: 2,
    name: "XYZ Bank",
    requirements: [
      {
        name: "Data Protection Policy",
        currentScore: 5,
        targetScore: 5
      },
      {
        name: "Incident Response Plan",
        currentScore: 2,
        targetScore: 5
      }
    ]
  }
];

// ==========================================
// Function to run gap analysis for ONE company
// ==========================================
function runGapAnalysis(company) {

  // Print company name
  console.log("\nCompany:", company.name);

  // Title for the report
  console.log("Gap Analysis Report:");

  // Array to store the gap results
  let report = [];

  // Loop through each requirement of the company
  company.requirements.forEach(req => {

    // Check if company meets the required score
    if (req.currentScore >= req.targetScore) {

      // If requirement is met, store compliant status
      report.push({
        requirement: req.name,
        status: "Compliant",
        gap: 0
      });

      // Show compliant message
      console.log("✅", req.name, "- Compliant");

    } else {

      // Calculate how much is missing
      let gap = req.targetScore - req.currentScore;

      // Store gap information
      report.push({
        requirement: req.name,
        status: "Gap",
        gap: gap
      });

      // Show gap message
      console.log("❌", req.name, "- Gap:", gap);
    }
  });

  // Return the final report for this company
  return report;
}

// ==========================================
// Run gap analysis for ALL companies
// ==========================================

// Loop through every company in the system
companies.forEach(company => {

  // Run gap analysis for the current company
  let result = runGapAnalysis(company);

  // (Later this will be saved to database or sent as API response)
});
