import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1); // Controlar la página actual
    const limit = 10; // Cantidad de productos por página


    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://678557161ec630ca33a83de2.mockapi.io/product?page=${page}&limit=${limit}`);
            const data = await response.json();
            
            console.log(data);

            //si no hay, dejar de cargar
            if (data.length == 0) {
                setHasMore(false);
            }


            // Filtrar productos duplicados basados en el id
            setProducts((prevProducts) => [...prevProducts, ...data])

            // Si no hay más productos, detener la carga infinita
            if (data.length < limit) {
                setHasMore(false);
            } else {
                setPage((prev) => prev + 1);
            }
            
        } catch (error) {
            console.error("Error fetching products:", error);
            setHasMore(false);
        }
    };

    useEffect(() => {
        fetchProducts();  // Llama a la función cuando el componente se monta
    }, []);

    const handleImageError = (e) => {
        e.target.src = 'https://picsum.photos/200/300?grayscale'; // Imagen de reemplazo
    };

    return (
        <div>
            <div className="Top-bar">
                <h1>Product List</h1>
            </div>
            <div id="scrollableDiv" className="scroll-container">
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchProducts}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="product-list">
                        
                        {products.map((product) => (
                            <div key={product.id ? product.id: `${index}`}  className="product-card"> {/* Usamos product.id como key */}
                                <img 
                                    src={product.Image} 
                                    alt={product.title} 
                                    onError={handleImageError} 
                                    />
                                <div className="content">
                                    <h3 className="title">{product.title}</h3>
                                    <p className="descripcion">{product.descripcion}</p>
                                    <p className="price">Price: ${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ProductList;
