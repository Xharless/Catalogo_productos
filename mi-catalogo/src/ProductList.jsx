import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    // Estado para almacenar los productos
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Estado para mostrar el cargando
    const [error, setError] = useState('');  // Estado para mostrar errores

    // Efecto secundario que se ejecuta al montar el componente
    useEffect(() => {
        // Realizamos la solicitud a la API
        axios
        .get('https://fakestoreapi.com/products')  // URL de la API para obtener productos
        .then((response) => {
            setProducts(response.data);  // Guardamos los productos en el estado
            setLoading(false);  // Indicamos que ya terminamos de cargar
        })
        .catch((error) => {
            setError('Hubo un error al cargar los productos');
            setLoading(false);  // Terminamos de cargar aunque haya un error
        });
    }, []);  // El array vacío significa que solo se ejecuta al montar el componente

    // Si hay un error o estamos cargando, mostramos un mensaje
    if (loading) return <div>Cargando productos...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <div className="content">
                        <h3 className="title">{product.title}</h3>
                        <p className="price">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
