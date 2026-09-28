// Operaciones CRUD y Verbos HTTP (GET, POST, PUT, DELETE

// 1. Mapeo CRUD a Verbos HTTP
// GET (Read / Leer): Solicita datos del servidor. No envía cuerpo de datos (body).

// POST (Create / Crear): Envía datos al servidor para crear un nuevo recurso.

// PUT / PATCH (Update / Actualizar): Modifica un recurso existente en el servidor.

// DELETE (Delete / Eliminar): Elimina un recurso del servidor.

// 2. Cómo enviar datos con fetch (POST)
// Por defecto, fetch realiza una petición GET. Para enviar datos (como crear un nuevo registro),
// debemos pasar un objeto de configuración como segundo argumento:

/* const respuesta = await fetch("https://api.ejemplo.com/recursos", {
  method: "POST", // Especificamos el método HTTP
  headers: {
    "Content-Type": "application/json", // Le avisamos al servidor que enviamos JSON
  },
  body: JSON.stringify(nuevoDato), // Convertimos el objeto JS a una cadena de texto JSON
}); */

// Tu Tarea / EjercicioEscribiremos una función para crear una nueva publicación
// (Post) en la API pública de JSONPlaceholder:Crea una función asíncrona llamada
// crearPost(titulo, contenido, idUsuario).Dentro de la función, realiza una petición fetch con método POST
// a la URL:
// [https://jsonplaceholder.typicode.com/posts]
// (https://jsonplaceholder.typicode.com/posts)
// Incluye las cabeceras (headers) especificando 'Content-Type': 'application/json'.En el body,
// envía un objeto convertido a JSON con las propiedades:title (recibido por parámetro)body
// (recibido por parámetro)userId (recibido por parámetro)Valida respuesta.ok, convierte la respuesta
// devuelta por el servidor a JSON e imprime en consola el objeto creado (JSONPlaceholder te devolverá el
// objeto con un id asignado automáticamente, indicando que fue creado con éxito).Envuelve todo dentro
// de su bloque try / catch.1.Prueba de la creación:Invoca la función crearPost("Mi primer Post",
// "Contenido del post...", 1) y confirma que la consola devuelva la respuesta con la ID asignada por el
// servidor.

const crearPost = async (titulo, contenido, idUsuario) => {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: titulo,
          body: contenido,
          userId: idUsuario,
        }),
      },
    );

    if (!respuesta.ok) {
      throw new Error(`error al crear maje ${respuesta.status}`);
    }
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (error) {
    console.log("error", error.message);
  }
};

crearPost("Mi primer Post", "Contenido del post...", 1);
