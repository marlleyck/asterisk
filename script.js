const generatorInput = document.getElementById("generator-inp");
const generatorButton = document.getElementById("generator-btn");
const resDiv = document.getElementById("resDiv");

const stringToAsterisk = () => {
  // Take input value
  const text = generatorInput.value;
  let asteriskText = "";

  // Loop in input value
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " ") {
      asteriskText += "*";
    } else if (text[i] == " ") {
      asteriskText += " ";
    }
  }

  resDiv.innerText = asteriskText;
};
