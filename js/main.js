const pacientes = [];

function createPaciente() {
  pacientes.push({
    dni: "35678990",
    nombre: "Jorge",
    apellido: "Perez",
    edad: 34,
  });
}

function manejarSubmit(event) {
  event.preventDefault();
  pacientes.push({
    dni: document.getElementById("dni").value,
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: document.getElementById("edad").value,
  });
  listadoPacientes();
}

function listadoPacientes() {
  const listadoPacientes = document.getElementById("listadoPacientes");
  listadoPacientes.innerHTML = "";
  pacientes.forEach((paciente) => {
    listadoPacientes.innerHTML += `
           <p>
             <span>${paciente.dni}</span>
             <span>${paciente.nombre}</span>
             <span>${paciente.apellido}</span>
             <span>${paciente.edad}</span>
           </p>
    `;
  });
}
