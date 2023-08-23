// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Call generatePassword() to get a new password
  var password = generatePassword();
  // Get reference to the #password textarea
  var passwordText = document.querySelector("#password");

  // Set the generated password in the textarea
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a password
function generatePassword() {
  // Prompt the user for desired password length
  var length = parseInt(prompt("Enter password length (8-128 characters):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Define character types and their corresponding characters
  var charTypes = [
    { type: "lowercase", chars: "abcdefghijklmnopqrstuvwxyz" },
    { type: "uppercase", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { type: "numeric", chars: "0123456789" },
    { type: "special", chars: "!@#$%^&*()_-+=<>?" }
  ];

  // Filter selected character types based on user confirmation
  var selectedTypes = charTypes.filter(function (charType) {
    return confirm("Include " + charType.type + " characters?");
  });

  // Check if at least one character type is selected
  if (selectedTypes.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // Combine characters from selected types into a pool
  var characterPool = selectedTypes.map(function (charType) {
    return charType.chars;
  }).join("");

  // Generate the password using the character pool
  var generatedPassword = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool.charAt(randomIndex);
  }

  // Return the generated password
  return generatedPassword;
}
