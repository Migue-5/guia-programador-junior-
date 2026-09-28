// Requisitos:Clase Producto:Propiedades: id, nombre, precio, cantidad y categoria.Método vender(unidades):
// Reduce la cantidad en stock según el número ingresado (no debe permitir stock negativo).Método
// reabastecer(unidades): Incrementa la cantidad en stock.Clase Inventario:Propiedad: productos (arreglo
//      de objetos Producto).Método agregarProducto(nombre, precio, cantidad, categoria).Método
//       realizarVenta(id, cantidad): Busca el producto e invoca su método vender.Método consultarBajoStock
//       (limite): Devuelve o imprime en consola los productos cuyo stock sea menor o igual al límite
//       especificado.Método calcularValorTotal(): Devuelve la suma total del valor monetario de todos l
//       os productos en existencia ($\text{precio} \times \text{cantidad}$).Flujo de Ejecución:Registra al
//       menos 3 productos de categorías distintas.Simula una venta exitosa y un reabastecimiento.Consulta
//       los productos con bajo stock.Imprime el valor total en dinero del inventario.Publicación:Guarda el
//        código en tu archivo principal, haz el commit con Git en tu terminal y sube el cambio a tu
//        repositorio remoto en GitHub (git push origin main).1.Pasos de Git tras codificar:Recuerda usar
//        la secuencia completa en tu terminal al terminar: git status, git add ., git commit -m
//         "feat: implementar sistema de inventario en POO", y git push.

class Producto {
  constructor(id, nombre, precio, cantidad, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
  }

  vender(unidades) {
    if (unidades > 0 && this.cantidad > 0 && unidades <= this.cantidad) {
      this.cantidad -= unidades;
    }
  }
  reabastecer(unidades) {
    if (unidades > 0) {
      this.cantidad += unidades;
    }
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }
  agregarProducto(nombre, precio, cantidad, categoria) {
    const nuevoId = this.productos.length + 1;
    const nuevoPorducto = new Producto(
      nuevoId,
      nombre,
      precio,
      cantidad,
      categoria,
    );
    this.productos.push(nuevoPorducto);
  }

  realizarVenta(id, cantidad) {
    const producto = this.productos.find((p) => p.id === id);
    if (producto) {
      producto.vender(cantidad);
    }
  }

  consultarBajoStock() {
    console.log(this.productos.filter((p) => p.cantidad <= 10));
  }

  calcularValorTotal() {
    for (let i = 0; i < this.productos.length; i++) {
      const producto = this.productos[i];
      console.log(
        producto.nombre,
        ": valor total =",
        producto.cantidad * producto.precio,
      );
    }
  }
}

const inventario = new Inventario();
inventario.agregarProducto("manzana", 2, 20, "frutas");
inventario.agregarProducto("iphone 12", 5000, 5, "celulares");
inventario.agregarProducto("gta 5", 500, 15, "video juegos");
inventario.consultarBajoStock();
inventario.realizarVenta(1, 1);

inventario.calcularValorTotal();
console.log(inventario);
