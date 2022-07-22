
let tableBody = document.getElementById("tableBody");


let personas = [
    {
        nombre : "Pepe",
        apedillo : "Sosa"
    },
    {
        nombre : "Juan",
        apedillo : "Castro"
    },
    {
        nombre : "Maria",
        apedillo : "Sosa"
    },
    {
        nombre : "Fede",
        apedillo : "Suarez"
    },
    {
        nombre : "Pepe",
        apedillo : "Sosa"
    },
    {
        nombre : "Juan",
        apedillo : "Castro"
    }
]

function addPersonTable() {
    for (let persona of personas) {
        let tr = document.createElement("tr");
        tableBody.appendChild(tr);
        let td1 = document.createElement("td");
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        tr.appendChild(td2);
        td1.innerHTML = persona.nombre;
        td2.innerHTML = persona.apedillo;
        if (persona.nombre.length > 4) {
            td1.style.backgroundColor = "aqua";
        }
    }
}

addPersonTable();