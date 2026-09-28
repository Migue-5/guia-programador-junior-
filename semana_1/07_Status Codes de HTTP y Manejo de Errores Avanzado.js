// Siguiendo la Parte V del Roadmap (Redes, HTTP y APIs REST), cuando realizamos peticiones con fetch,
// un error de red (como quedarse sin internet) activa el bloque catch. Sin embargo,
// si la API responde con un código de error de HTTP (como un 404 Not Found cuando el usuario no existe),
//  fetch NO lanza una excepción automáticamente; considera que la petición HTTP fue exitosa porque el servidor
//   respondió.
//  1. Códigos de Estado HTTP Más Comunes (Status Codes)
// 200 OK / 201 Created: La solicitud tuvo éxito.
// 400 Bad Request: La solicitud del cliente está mal formada o faltan datos.
// 404 Not Found El recurso solicitado no existe.
// 500 Internal Server Error: Ocurrió un fallo en el servidor.

// 2. Validación de respuesta.ok
// Para saber si la respuesta HTTP fue exitosa (código 200-299), la respuesta de fetch incluye una
// propiedad booleana llamada respuesta.ok.

/* if (!respuesta.ok) {
  throw new Error(`Error HTTP: ${respuesta.status}`); // Lanzamos manualmente el error para ir al catch
} */

// Tu Tarea / EjercicioVamos a mejorar la función obtenerUsuario para que maneje búsquedas de usuarios
// inexistentes de forma profesional:Modifica la función obtenerUsuario(id).Tras ejecutar fetch, valida si
// respuesta.ok es true.Si respuesta.ok es false (por ejemplo, si buscas el usuario 999), lanza un error
//  personalizado lanzando una excepción con
//  throw new Error("El usuario solicitado no existe").
//  El bloque catch debe capturar ese error e imprimir en consola: "Ocurrió un problema: [mensaje del error]".
//  Ejecuta la función con un ID válido (ej. 1) y con un ID inexistente (ej. 999).
//  1.Validación de Errores HTTP:Asegúrate de comprobar en la consola que al llamar obtenerUsuario(999)
//  el programa ejecute limpiamente el bloque catch mostrando tu mensaje personalizado sin congelarse.

const obtenerUsuario = async (id) => {
  try {
    const respuesta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!respuesta.ok) {
      throw new Error(`usuario no encontrado ${respuesta.status}`);
    }

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

obtenerUsuario(100);
