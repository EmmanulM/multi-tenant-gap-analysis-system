// Day 2: JavaScript Basics for Gap Analysis

let companyName = "ABC Limited";
let currentScore = 2;
let targetScore = 5;

console.log("Company:", companyName);

if (currentScore >= targetScore) {
  console.log("No gap. Requirement is met.");
} else {
  let gap = targetScore - currentScore;
  console.log("Gap detected. Missing:", gap);
}

