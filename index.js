document
  .getElementById("marksForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);
    const subject5 = parseFloat(document.getElementById("subject5").value);

    if (
      subject1 > 100 ||
      subject2 > 100 ||
      subject3 > 100 ||
      subject4 > 100 ||
      subject5 > 100
    ) {
      alert("Marks for each subject should not exceed 100.");
      return;
    }

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

    const percentage = (totalMarks / 500) * 100;

    let grade;
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else if (percentage >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    document.getElementById("totalMarks").textContent = totalMarks;
    document.getElementById("percentage").textContent =
      percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;

    document.getElementById("result").style.display = "block";
  });

document.getElementById("restartBtn").addEventListener("click", function () {
  document.getElementById("marksForm").reset();

  document.getElementById("result").style.display = "none";
});
