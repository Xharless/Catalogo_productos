# Catalogo_productos 
## Informacion sobre el codigo
- npm create vite@latest mi-catalogo
- Luego escoger React y JS con SWC, para luego hacer los pasos que se indican en el terminal
- Se utilizó MockApi para crear una api con los datos de los productos, los productos están en un json con el siguiente formato:
    {
    "title": "Refined Cotton Towels",
    "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "price": "184.00",
    "Image": "https://loremflickr.com/640/480/nightlife",
    "id": "1"
    }
- Se utilizó el InfiniteScroll para poder renderizar cierta cantidad de productos al inicio, y una vez se vaya bajando, ir cargando el resto de productos. La razón de esto es que para una api que contanga miles de productos, no podemos renderizar los miles de productos al mismo tiempo debido a que esto pegar de forma directa en el rendimiento
## Software utilizado
- Se utilizó React con JavaScript + SWC y Vite
