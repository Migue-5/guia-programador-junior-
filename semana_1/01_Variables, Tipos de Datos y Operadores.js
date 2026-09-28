/////////// . Tipos de Datos Primitivos

// Enteros y decimales: Representan números (10, 3.14).

// Cadenas (Strings): Texto entre comillas ("Hola mundo").

// Booleanos: Valores lógicos que solo pueden ser true o false.

// Especiales/Estructurados: En JS existen null (ausencia intencional de valor) y undefined (variable declarada sin valor asignado).

/////////////////////// 3. Operadores Lógicos y de Comparación
// Nos permiten evaluar condiciones para tomar decisiones en el código:

// Comparación: == / === (igualdad), != / !== (diferente), >, <, >=, <=.

// Lógicos:

// && (AND / Y): Retorna true solo si ambas condiciones son verdaderas.

// || (OR / O): Retorna true si al menos una condición es verdadera.

// ! (NOT / NO): Invierte el valor booleano (!true pasa a ser false).

////////////////////////////////////
// Tu Tarea / Ejercicio
// Escribe un script o programa en el lenguaje de tu elección (JS o C#) que realice lo siguiente:

// Declara variables para simular la información de un usuario que intenta ingresar a un sistema:

const edad = 20;
const tieneMembresia = true;
const estaBaneado = true;

// Crea una variable booleana llamada puedeIngresar que evalúe mediante operadores
//  lógicos (&&, ||, !) la siguiente regla de negocio:El usuario puede ingresar si es
//  mayor de edad ($\ge 18$) Y tiene membresía activa, SIEMPRE Y CUANDO NO esté baneado.

const puedeIngresar = edad >= 18 && tieneMembresia && !estaBaneado;
console.log(puedeIngresar);
