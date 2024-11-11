// Function to get grades from the input box, clean up the input, and convert it to uppercase
function getGrades(inputSelector) {
  const input = document.querySelector(inputSelector).value;
  return input.split(',').map(grade => grade.trim().toUpperCase());
}

// Function to convert letter grades to GPA points
function lookupGrade(grade) {
  switch (grade) {
    case 'A': return 4.0;
    case 'B': return 3.0;
    case 'C': return 2.0;
    case 'D': return 1.0;
    case 'F': return 0.0;
    default: return null; // Handles invalid grades
  }
}

// Function to calculate GPA from the list of grades
function calculateGpa(grades) {
  const totalPoints = grades
    .map(lookupGrade)
    .filter(point => point !== null) // Remove invalid grades
    .reduce((sum, point) => sum + point, 0);
  return (totalPoints / grades.length).toFixed(2); // Round to 2 decimal places
}

// Function to output GPA to the HTML page
function outputGpa(gpa, selector) {
  document.querySelector(selector).textContent = `Your GPA is: ${gpa}`;
}

// Function to handle the button click event
function clickHandler() {
  const grades = getGrades('#grades');
  if (grades.length > 0) {
    const gpa = calculateGpa(grades);
    outputGpa(gpa, '#output');
  } else {
    outputGpa('Please enter valid grades.', '#output');
  }
}

// Add event listener to the button to trigger GPA calculation on click
document.querySelector('#submitButton').addEventListener('click', clickHandler);