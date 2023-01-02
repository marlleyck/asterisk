const generatorInput = document.getElementById("generator-inp");
const generatorButton = document.getElementById("generator-btn");
const resultParagraph = document.getElementById("result-paragraph");
const copyButton = document.getElementById("copy-button");

// Copy text function
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(resultParagraph.innerText);
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

  resultParagraph.innerText = asteriskText;
};

copyButton.addEventListener("click", copyContent);
