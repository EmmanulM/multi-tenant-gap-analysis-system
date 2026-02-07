// =====================================
// DAY 6: GAP NOTIFICATIONS SYSTEM
// =====================================

// Define one company (same structure as Day 5)
let company = {
  name: "ABC Limited",
  requirements: [
    {
      name: "Data Protection Policy",
      status: "Open",      // Open | Pending | Closed
      evidence: []
    },
    {
      name: "Access Control",
      status: "Pending",
      evidence: ["access_control_doc.pdf"]
    },
    {
      name: "Incident Response Plan",
      status: "Closed",
      evidence: ["incident_plan.pdf"]
    }
  ]
};

// =====================================
// STEP 1: CHECK REQUIREMENTS & NOTIFY
// =====================================

// Loop through all requirements
company.requirements.forEach(req => {

  // If gap is still open, notify the company
  if (req.status === "Open") {
    console.log("🔔 ACTION REQUIRED:", req.name);
  }

  // If evidence is pending review, show waiting message
  else if (req.status === "Pending") {
    console.log("⏳ Pending review:", req.name);
  }

  // If gap is closed, no action needed
  else if (req.status === "Closed") {
    console.log("✅ Closed:", req.name);
  }
});
