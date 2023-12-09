document.getElementById("submitBtn").addEventListener("click", checkInput);

function checkInput() {
  var userInput = document.getElementById("inputField").value;
  var validInput = "b";

  if (userInput === validInput) {
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("fullWebsite").classList.add("show");
  } else {
    alert("Invalid input. Please try again.");
  }
}