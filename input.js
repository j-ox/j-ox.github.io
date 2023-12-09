document.getElementById("submitBtn").addEventListener("click", checkInput);

function checkInput() {
  var userInput = document.getElementById("inputField").value;
  var validInputs = ["8a50!b418", "c", "d"];

  if (validInputs.includes(userInput)) {
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("fullWebsite").classList.add("show");
  } else {
    alert("Invalid input. Please try again.");
  }
}