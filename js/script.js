// Hente UL objekt
const handleliste = document.querySelector("#handleliste");

// Hente Input objekt
const inpVare = document.querySelector("#inpVare");
const clearKnapp = document.querySelector("#clearKnapp");

handleliste.innerHTML = localStorage.getItem("handleliste");

var id = localStorage.getItem("teller");
if (id === null) {
    id = 1;
}

inpVare.onchange = () => {
    if (inpVare.value !== '') {
        
        var vare = ` <li id="button`+ id + `"><button class="checkbox" onClick="check(`+ id + `)">X</button> ${inpVare.value} </li>`;
        handleliste.innerHTML += vare;
        var nyeVarer = "";
        var gamleVarer = localStorage.getItem("handleliste");
        console.log("Gamle varer: " + gamleVarer);
        if (gamleVarer !== null) {
            nyeVarer = gamleVarer;
        }
        nyeVarer = nyeVarer + vare;
        localStorage.setItem("handleliste", nyeVarer)
        localStorage.setItem("teller", id++);
        inpVare.value = "";
    }
};

clearKnapp.onclick = () => {
    handleliste.innerHTML = "";
    console.log("tømmer");
    localStorage.clear();
}

function check(id) {
    const listElement = document.querySelector('#button' + id);
    if (listElement.hasAttribute("style")) {
        listElement.removeAttribute("style");
    } else {
        listElement.setAttribute("style", 'text-decoration:line-through');
    }
    localStorage.setItem("handleliste", handleliste.innerHTML);
}


console.log("hei på deg ");