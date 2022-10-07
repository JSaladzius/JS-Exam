/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function getCars() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((cars) => renderCars(cars));
}
getCars();

function renderCars(cars) {
  const output = document.getElementById("output");
  output.innerHTML = "";
  console.log(cars);

  cars.forEach((maker) => {
    const brandBox = document.createElement("div");
    brandBox.className = "brandBox";
    const brandName = document.createElement("h2");
    brandName.className = "brandName";
    brandName.innerText = maker.brand;
    const carList = document.createElement("ol");
    carList.className = "carList";
    console.log(maker.models);
    const models = maker.models;

    models.forEach((model) => {
      const modelList = document.createElement("li");
      modelList.className = "modelsList";
      modelList.innerText = model;
      carList.append(modelList);
    });

    brandBox.append(brandName, carList);
    output.append(brandBox);
  });
}
