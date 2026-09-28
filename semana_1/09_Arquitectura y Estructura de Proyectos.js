// /mi-proyecto
// │── index.js              # Archivo principal de entrada (punto de arranque)
// │── /services
// │   └── apiService.js     # Funciones que realizan fetch a las APIs (red)
// └── /models
//     └── Post.js           # Clases u objetos de datos

// 1. Módulos de JavaScript (import / export)
// JavaScript nos permite exportar funciones o clases de un archivo e importarlas en otro:

// Para exportar (apiService.js):

// JavaScript
// export const obtenerDatos = async () => { ... };
// Para importar (index.js):

// JavaScript
// import { obtenerDatos } from "./services/apiService.js";

// Tu Tarea / Ejercicio
// Estructuraremos el mini-cliente de API que has creado separándolo en módulos:

// Crea una carpeta llamada services/ y dentro un archivo usuarioService.js.

// Mueve a usuarioService.js las dos funciones asíncronas que programaste: obtenerUsuario y crearPost. Agrégales la palabra export enfrente.

// En tu archivo principal index.js, importa ambas funciones desde ./services/usuarioService.js.

// Ejecuta el archivo principal invocando las dos funciones e imprime los resultados en pantalla.

// Sube esta reestructuración a tu repositorio usando Git desde la terminal:
