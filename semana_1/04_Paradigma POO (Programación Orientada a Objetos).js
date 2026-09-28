// La POO nos ayuda a estructurar programas agrupando datos (atributos) y comportamientos (métodos)
//  dentro de "moldes" llamados Clases.

// Conceptos Clave:
// Clase (class): El plano o plantilla para crear objetos. Define qué propiedades tendrá el objeto y
// qué acciones podrá realizar.

// Constructor (constructor): Un método especial que se ejecuta automáticamente cuando creas una nueva
// instancia de la clase (new MiClase()). Sirve para inicializar las propiedades.

// Instancia / Objeto: La entidad concreta creada a partir de una clase.

// Encapsulamiento y Métodos: Las funciones que viven dentro de una clase se llaman métodos. Se encargan
// de modificar o consultar los datos internos del objeto usando la palabra reservada this.

// Ejemplo conceptual:

class Usuario {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
    this.activo = true;
  }

  desactivar() {
    this.activo = false;
  }
}

const Miguel = new Usuario("miguel", 20);
// console.log(Miguel);

// Crea una clase llamada Tarea que tenga:Constructor: Recibe id, nombre y prioridad. Inicializa completada en
// false.Método completar(): Cambia la propiedad completada del objeto a true.Crea una clase llamada
// GestorTareas que tenga:Constructor: Inicializa una lista vacía this.tareas = [].Método agregar(nombre,
//      prioridad): Instancia una nueva Tarea usando new Tarea(...) y la guarda en la lista.Método
//       completarTarea(id): Busca la tarea correspondiente en la lista y ejecuta su método .completar()
//       .Método listar(): Imprime en consola el listado de tareas registradas.Instancia la clase GestorTareas,
//        agrega 2 tareas, completa 1 y muestra la lista en consola.1.Prueba de encapsulamiento:
//        Asegúrate de que la clase GestorTareas sea la encargada de manejar el arreglo de tareas y
//        de invocar el método .completar() perteneciente a cada instancia de Tarea.

class Tarea {
  constructor(id, nombre, prioridad) {
    this.id = id;
    this.nombre = nombre;
    this.prioridad = prioridad;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(nombre, prioridad) {
    const nuevoId = this.tareas.length + 1;
    const tarea = new Tarea(nuevoId, nombre, prioridad);
    this.tareas.push(tarea);
  }

  completarTarea(id) {
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completar();
    }
  }

  listar() {
    console.log(this.tareas);
  }
}

const tarea1 = new GestorTareas();

tarea1.agregarTarea("Tarea 1 jaja", "no");
tarea1.agregarTarea("Tarea 2 jaja", "no");
tarea1.completarTarea(2);

tarea1.listar();
