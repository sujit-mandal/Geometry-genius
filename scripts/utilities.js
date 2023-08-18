// function valueValidator(value1, value2, name) {
//   if (isNaN(value1) || value1 <= 0) {
//     alert(
//       `Your ${name} input is invalid or blank or not a number. Please enter a valid input.`
//     );
//     return;
//   } else if (isNaN(value2) || value2 <= 0) {
//     alert(
//       `Your ${name} input is invalid or blank or not a number. Please enter a valid input.`
//     );
//     return;
//   }
// }
let serial = 0;
// For Display table
function displayData(area, geometryName) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  serial += 1;

  tr.innerHTML = `
      <th scope="row">${serial}.</th>
      <td>${geometryName}</td>
      <td>
       ${area}cm<sup>2</sup>
       </td>
      <td>
      <button id="convert-to-meter" class="geometry-secondary-btn ">
        Convert to m<sup>2</sup>
      </button>
      </td>
      `;
  container.appendChild(tr);
}
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function setElementValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
