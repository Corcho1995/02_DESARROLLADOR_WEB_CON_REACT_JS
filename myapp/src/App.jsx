import React from 'react';
import ProductDetail from './components/ProductDetail';
import productos from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      {productos.map((producto) => (
        <div key={producto.id} className="product-container">
          <ProductDetail {...producto} />
        </div>
      ))}
    </div>
  );
}

export default App;
