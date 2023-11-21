import React from 'react';

function ProductDetail({ nombre, descripcion, precio, sku, cantidadDisponible }) {
  return (
    <div className="product-box">
      <h2>{nombre}</h2>
      <p>Descripción: {descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad Disponible: {cantidadDisponible}</p>
    </div>
  );
}

export default ProductDetail;
