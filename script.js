// Elemento donde se mostrarán los productos
const productList = document.getElementById('product-list');

// Función para obtener productos desde DummyJSON
async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        // Llamar a la función para mostrar productos
        displayProducts(data.products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Función para mostrar productos en la página
function displayProducts(products) {
    productList.innerHTML = ''; // Limpiar contenedor

    products.forEach(product => {
        // Crear la tarjeta de producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
        `;

        // Agregar la tarjeta al contenedor principal
        productList.appendChild(productCard);
    });
}

// Llamar a la función para cargar productos
fetchProducts();
