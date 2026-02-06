// Company details
let companyName = "ABC Limited";

// Gap analysis requirements
let requirements = [
  {
    name: "Data Protection Policy",
    currentScore: 2,
    targetScore: 5
  },
  {
    name: "Access Control",
    currentScore: 4,
    targetScore: 5
  },
  {
    name: "Incident Response Plan",
    currentScore: 1,
    targetScore: 5
  }
];


console.log("Company:", companyName);
console.log("Starting gap analysis...\n");

requirements.forEach((req) => {
  if (req.currentScore >= req.targetScore) {
    console.log(req.name + ": ✅ Compliant");
  } else {
    let gap = req.targetScore - req.currentScore;
    console.log(req.name + ": ❌ Gap detected (Missing " + gap + ")");
  }
});

gapReport.forEach(item => {
  if (item.status === "Gap") {
    console.log("🔔 Notify company about:", item.requirement);
  }
});
