// 1. Arreglos (Arrays)
// Un Array es una lista ordenada de elementos. Se accede a cada elemento mediante su índice numérico
// (empezando desde 0).

// Operaciones comunes: .push() (agregar al final), .pop() (eliminar el último), .length
// (tamaño del arreglo).

const miArray = [1, 2, 3];

///////////////////////////////////////
// Objetos / Hash Tables (Diccionarios)
// Estructuras de clave-valor que permiten modelar entidades del mundo real (como el objeto usuario del
//     ejemplo anterior).

// Permiten acceder a la información de manera directa mediante la clave (usuario.edad), lo que resulta
// mucho más eficiente que buscar elemento por elemento en una lista grande
//  (relacionado con la Notación Big O)

const usuarios = {
  nombre: "juan",
  edad: 20,
};

// ////////////////////////////////
// Depuración (Debugging)El debugging es la metodología para inspeccionar el estado de la aplicación
// paso a paso sin adivinar.   Breakpoints (Puntos de interrupción): Marcas en el editor de código donde
// la ejecución se pausa para que puedas inspeccionar qué valor tiene cada variable en ese instante preciso.

// Tu Tarea / EjercicioCrearemos un pequeño Administrador de Tareas en Consola:Crea un arreglo vacío llamado
// tareas.Escribe una función agregarTarea(nombre, prioridad) que cree un objeto con la estructura { id,
// nombre, prioridad, completada: false } y lo agregue al arreglo tareas. (El id puede ser un número
// incremental o basado en la longitud del arreglo).Escribe una función completarTarea(id) que
// busque la tarea por su id en el arreglo y cambie su propiedad completada a true.Agrega 3 tareas
// usando la función, completa 1 de ellas y finalmente muestra el arreglo completo en la consola
// mediante un bucle.1.Depuración previa al envío:En lugar de usar console.log para revisar paso a
// paso cómo cambian las variables dentro de completarTarea, prueba colocar un breakpoint en tu
// entorno/editor e inspeccionar el arreglo tareas.

const tareas = [];

const agregarTarea = (nombre, prioridad) => {
  tareas.push({
    id: tareas.length + 1,
    nombre,
    prioridad,
    completada: false,
  });
};

agregarTarea("miguel", "no");
agregarTarea("juan", "si");
agregarTarea("luis", "no");
// console.log(tareas);

const completarTarea = (id) => {
  const tarea = tareas.find((t) => t.id == id);
  if (tarea) {
    tarea.completada = true;
  }
};
// .find() que hacen la búsqueda más expresiva y limpia:
console.log(tareas);

completarTarea(tareas[1].id);

console.log(tareas);
