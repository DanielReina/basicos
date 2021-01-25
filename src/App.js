import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJs", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 40 },
    { id: 3, nombre: "Camisa Node.Js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
  ]);

  //State para un carrito dde compras
  const [carrito, agregarProducto] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header title="Tienda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito carrito={carrito} agregarProducto={agregarProducto} />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
