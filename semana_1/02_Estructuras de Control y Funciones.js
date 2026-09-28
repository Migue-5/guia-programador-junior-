// 1. Condicionales (if, else if, else)
// si se cumple has esto, de lo contrario has esto

//     if (puedeIngresar) {
//   console.log("Acceso concedido al sistema.");
// } else {
//   console.log("Acceso denegado.");
// }

////////////////////////////////////////
// 2. Bucles (for, while)
// Nos permiten repetir una tarea múltiples veces sin duplicar código:

// for: Se usa cuando sabemos cuántas veces queremos iterar (ej. recorrer un listado).

// while: Se usa cuando queremos repetir algo mientras una condición siga siendo verdadera.

//////////////////////////////
// 3. Funciones
// Una función es un bloque de código ejecutable que recibe entradas (parámetros),
// realiza una serie de pasos y devuelve un resultado (return). Sirven para reutilizar código y
// no repetir lógica.

const evaluarAcceso = (edad, tieneMembresia, estaBaneado) => {
  if (edad >= 18 && tieneMembresia && !estaBaneado) {
    return "Acceso concedido";
  } else {
    return "Acceso denegado";
  }
};

const usuarios = [
  { edad: 18, tieneMembresia: true, estaBaneado: false },
  { edad: 15, tieneMembresia: true, estaBaneado: true },
  { edad: 15, tieneMembresia: false, estaBaneado: false },
];

for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  console.log(
    evaluarAcceso(usuario.edad, usuario.tieneMembresia, usuario.estaBaneado),
  );
}
//
let i = 0;
while (i < usuarios.length) {
  const usuario = usuarios[i];
  console.log(
    evaluarAcceso(usuario.edad, usuario.tieneMembresia, usuario.estaBaneado),
  );
  i++;
}
