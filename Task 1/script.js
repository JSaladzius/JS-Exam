/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const submit = document.querySelector("form");
const output = document.getElementById("output");

submit.addEventListener("submit", convertWeight);

function convertWeight(event) {
  event.preventDefault();
  const inputValue = Number(document.getElementById("search").value);
  const lb = inputValue * 2.2046;
  const g = inputValue / 0.001;
  const oz = inputValue * 35.274;
  const results = [
    { unit: "lb", conversion: lb },
    { unit: "g", conversion: g },
    { unit: "oz", conversion: oz },
  ];
  renderResults(results);
}

function renderResults(results) {
  output.innerHTML = "";
  results.forEach((result) => {
    const converted = document.createElement("h1");
    converted.className = "converted";
    converted.innerText = result.conversion + " " + result.unit;
    output.append(converted);
  });
}
