import React from 'react';
import ProductList from './ProductList';  // Asegúrate de importar el componente

const App = () => {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ProductList />  {/* Aquí renderizas la lista de productos */}
    </div>
  );
};

export default App;
