
let dni = [];
let nombreApellido = [];
let horasCatedra = [];


let i = 0;


function agregar() {

    const _dni = document.getElementById("txtDni");
    const _nombreApellido = document.getElementById("txtNombreApellido");
    const _horasCatedra = document.getElementById("txtHorasCatedra");


    dni[i] = parseFloat(_dni.value);
    nombreApellido[i] = _nombreApellido.value;
    horasCatedra[i] = parseFloat(_horasCatedra.value);


    i++;


    const td0 = document.createElement("td");
    td0.innerHTML = _dni.value;

    const td1 = document.createElement("td");
    td1.innerHTML = _nombreApellido.value;

    const td2 = document.createElement("td");
    td2.innerHTML = _horasCatedra.value;


    const _tr = document.createElement("tr");
    _tr.appendChild(td0);
    _tr.appendChild(td1);
    _tr.appendChild(td2);

    const _tbody = document.querySelector("tbody");
    _tbody.appendChild(_tr);

    _dni.value = "";
    _nombreApellido.value = "";
    _horasCatedra.value = "";
    _dni.focus();
}


function verEstadisticas() {

    let cont = 0;
    let acum = 0;
    let prom = 0;
    let men = 99999;
    let menNombreApellido = "";




    for (let i = 0; i < dni.length; i++) {
        let d = dni[i];
        let na = nombreApellido[i];
        let hc = horasCatedra[i];

        cont++;
        acum = acum + hc;

        if (hc < men) {
            men = hc;
            menNombreApellido = na;

        }



    }


    prom = acum / cont;


    const _lblCantidadTotalProfesores = document.getElementById("lblCantidadTotalProfesores");
    _lblCantidadTotalProfesores.innerHTML = cont;

    const _lblPromedioHorasCatedra = document.getElementById("lblPromedioHorasCatedra");
    _lblPromedioHorasCatedra.innerHTML = prom;

    const _lblAcumuladoHorasCatedra = document.getElementById("lblAcumuladoHorasCatedra");
    _lblAcumuladoHorasCatedra.innerHTML = acum;

    const _lblProfesorMenosHorasCatedra = document.getElementById("lblProfesorMenosHorasCatedra");
    _lblProfesorMenosHorasCatedra.innerHTML = `Profesor: ${menNombreApellido} - ${men} horas.`;

}
