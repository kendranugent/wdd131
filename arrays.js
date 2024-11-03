//  arrays.js

//example 1
const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;
{
  return //the html string made from step
}
const stepsHtml = steps.map(listTemplate).join(''); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml; // set the innerHTML

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  if (grade === "A") return 4;
  if (grade === "B") return 3;
  return 0; // in case of other grades
}
const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#gpaPointsDisplay").textContent = `GPA Points: ${gpaPoints.join(', ')}`;

// example 3
const totalGpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
document.querySelector("#totalGpaDisplay").textContent = `Total GPA: ${totalGpa.toFixed(2)}`;

// example 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
document.querySelector("#filteredWordsDisplay").textContent = `Filtered Words: ${shortWords.join(', ')}`;

// example 5
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#luckyNumberDisplay").textContent = `Lucky Number Index: ${luckyIndex}`;