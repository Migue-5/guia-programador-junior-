// Conceptos Teóricos: Asincronía, Promesas y HTTP

/* ¿Qué es la Asincronía?
En JavaScript, las tareas pesadas (como pedir datos a un servidor en internet o leer un archivo local) 
toman tiempo. Para no congelar el programa, JavaScript ejecuta esas tareas en segundo plano de manera 
asíncrona y nos avisará cuando la respuesta esté lista */

// Promesas (Promises) y async / await:
// Una Promesa es un objeto que representa un valor que estará disponible en el futuro (o que puede fallar).
// Con async y await, podemos escribir código asíncrono que se lee casi como si fuera síncrono y secuencial.

// 'async' le indica a la función que contendrá operaciones asíncronas
async function obtenerDatos() {
  // 'await' pausa la ejecución de la función hasta que se resuelva la Promesa
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json(); // Convierte la respuesta a un objeto JS
  return datos;
}

// Manejo de Errores con try / catch:
// Al realizar llamadas de red, la conexión puede fallar. Envolvemos la petición en un bloque try
//  para intentar ejecutarla y en catch para atrapar cualquier error sin que la aplicación colapse:

async function obtenerDatosSeguros() {
  try {
    const respuesta = await fetch("https://api.ejemplo.com/datos");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Ocurrió un error al consultar la API:", error.message);
  }
}

// Tu Tarea / Ejercicio
// Crearemos una función asíncrona que consuma una API pública real para consultar información:

// Utilizaremos la API pública e interactiva JSONPlaceholder:
// [https://jsonplaceholder.typicode.com/todos/1]
// (https://jsonplaceholder.typicode.com/todos/1) (o la lista de usuarios /users).

// Escribe una función asíncrona llamada obtenerUsuario(id) que use async / await.Dentro de la función,
// realiza una petición fetch a
// [https://jsonplaceholder.typicode.com/users/$]
// (https://jsonplaceholder.typicode.com/users/$)
// {id}.Envuelve la petición dentro de un bloque try / catch.Convierte la respuesta a JSON y
// muestra en consola únicamente el nombre (name), correo (email) y empresa (company.name) del
// usuario obtenido.1.Prueba de la API:Llama a tu función pasando distintos IDs
// (por ejemplo, obtenerUsuario(1) y obtenerUsuario(2)) y verifica que la información mostrada en pantalla
// cambie de acuerdo a cada usuario.

const obtenerUsuario = async (id) => {
  try {
    const respuesta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const datos = await respuesta.json();
    // Mostramos la información específica solicitada
    console.log(`Nombre: ${datos.name}`);
    console.log(`Email: ${datos.email}`);
    console.log(`Empresa: ${datos.company?.name}`);
    console.log("------------------------");
  } catch (error) {
    console.log("error mi rey ", error.message);
  }
};

obtenerUsuario(1);
obtenerUsuario(2);
