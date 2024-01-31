// Function for calculating grades
const calculateGrades = () => {
    // Get input elements
    const chemistryInput = document.querySelector("#chemistry");
    const biologyInput = document.querySelector("#biology");
    const mathsInput = document.querySelector("#maths");
    const phyInput = document.querySelector("#phy");
    const resultElement = document.querySelector("#showdata");
  
    // Get marks and convert them to numbers
    const chemistryMark = Number(chemistryInput.value);
    const biologyMark = Number(biologyInput.value);
    const mathsMark = Number(mathsInput.value);
    const phyMark = Number(phyInput.value);
  
    // Calculate total marks and percentage
    const totalMarks = chemistryMark + biologyMark + mathsMark + phyMark;
    const percentage = (totalMarks / 400) * 100;
  
    // Determine the grade
    let grade;
    if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 60) {
      grade = "B";
    } else if (percentage >= 40) {
      grade = "C";
    } else {
      grade = "F";
    }
  
    // Display the result
    if (chemistryMark === 0 || biologyMark === 0 || mathsMark === 0 || phyMark === 0) {
      resultElement.innerHTML = "Please enter all the fields.";
    } else {
      const resultMessage = `Out of 400 your total is ${totalMarks} and percentage is ${percentage}%.<br>Your grade is ${grade}.`;
      if (percentage >= 39.5) {
        resultElement.innerHTML = `${resultMessage} You are Pass.`;
      } else {
        resultElement.innerHTML = `${resultMessage} You are Fail.`;
      }
    }
  };