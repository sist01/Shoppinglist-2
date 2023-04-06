// Hente UL objekt
const handeliste = document.querySelector("handleliste");

// Hente Input objekt
const inpVare = document.querySelector("inpVare");

inpVare.ocechange = () => {
    handeliste.innerHTML += `
     <li> ${inpVare.value} <li/>

    `;

    inpVare.value = "";

}