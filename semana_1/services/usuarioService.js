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

module.exports = { obtenerUsuario, crearPost };
