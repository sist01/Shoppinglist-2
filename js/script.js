// Hente UL objekt
const handleliste = document.querySelector("#handleliste");

// Hente Input objekt
const inpVare = document.querySelector("#inpVare");

inpVare.onchange = () => {
    handleliste.innerHTML += `
        <li> ${inpVare.value} </li>
    `;
    
    inpVare.value = "";
};

function addButton() {
    const liElement = document.createElement('li');
    if(inputElement.value !=='') {
        liElement.textContent = inputElement.value;
        ulShoppingListElement.appendChild(liElement);
    }
} 