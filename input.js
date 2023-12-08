document.addEventListener("DOMContentLoaded", function() {
    checkIfInspected();
  });
  
  function checkIfInspected() {
    if (document.readyState === "complete") {
      var scriptTags = document.getElementsByTagName("script");
      
      for (var i = 0; i < scriptTags.length; i++) {
        var scriptTag = scriptTags[i];
        
        if (scriptTag.src.includes("input.js") && scriptTag.readyState === "interactive") {
          alert("Hey man, that's bad!");
          break;
        }
      }
    }
  }
  
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

/*no dubmass, inspecting elements does not mean you are a hacker. 0 security has been implemented this is just a comcept*/