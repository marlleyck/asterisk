const generatorInput = document.getElementById("generator-inp");
const generatorButton = document.getElementById("generator-btn");
const resDiv = document.getElementById("resDiv");
const copyIcon = document.getElementById("copy-icon");

// Copy text function
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(resDiv.innerText);
    alert("Copiado com sucesso!");
  } catch (err) {
    console.error(err);
    alert("Erro ao copiar");
  }
};

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

copyIcon.addEventListener("click", copyContent);
