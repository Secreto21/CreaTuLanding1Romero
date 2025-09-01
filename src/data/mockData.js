// Datos de ejemplo para productos
export const productos = [
  {
    id: 1,
    nombre: "Smartphone Samsung Galaxy",
    precio: 299999,
    categoria: "tecnologia",
    descripcion: "Smartphone Samsung Galaxy con pantalla de 6.5 pulgadas, 128GB de almacenamiento y cámara de 64MP",
    imagen: "https://via.placeholder.com/300x300?text=Samsung+Galaxy",
    stock: 15
  },
  {
    id: 2,
    nombre: "Laptop HP Pavilion",
    precio: 849999,
    categoria: "tecnologia",
    descripcion: "Laptop HP Pavilion con procesador Intel i5, 8GB RAM, 512GB SSD y pantalla de 15.6 pulgadas",
    imagen: "https://via.placeholder.com/300x300?text=HP+Pavilion",
    stock: 8
  },
  {
    id: 3,
    nombre: "Remera Nike Deportiva",
    precio: 15999,
    categoria: "ropa",
    descripcion: "Remera deportiva Nike con tecnología Dri-FIT, ideal para entrenamientos y actividades deportivas",
    imagen: "https://via.placeholder.com/300x300?text=Nike+Remera",
    stock: 25
  },
  {
    id: 4,
    nombre: "Zapatillas Adidas Running",
    precio: 45999,
    categoria: "ropa",
    descripcion: "Zapatillas Adidas para running con amortiguación Boost y suela de alta tracción",
    imagen: "https://via.placeholder.com/300x300?text=Adidas+Running",
    stock: 12
  },
  {
    id: 5,
    nombre: "Auriculares Sony WH-1000XM4",
    precio: 89999,
    categoria: "tecnologia",
    descripcion: "Auriculares inalámbricos Sony con cancelación de ruido activa y 30 horas de batería",
    imagen: "https://via.placeholder.com/300x300?text=Sony+WH1000XM4",
    stock: 20
  },
  {
    id: 6,
    nombre: "Jeans Levi's 501",
    precio: 35999,
    categoria: "ropa",
    descripcion: "Jeans clásicos Levi's 501 de corte recto, confeccionados en denim 100% algodón",
    imagen: "https://via.placeholder.com/300x300?text=Levis+501",
    stock: 18
  },
  {
    id: 7,
    nombre: "Cafetera Nespresso",
    precio: 65999,
    categoria: "hogar",
    descripcion: "Cafetera Nespresso automática con sistema de cápsulas y espumador de leche integrado",
    imagen: "https://via.placeholder.com/300x300?text=Nespresso",
    stock: 10
  },
  {
    id: 8,
    nombre: "Set de Ollas Tramontina",
    precio: 25999,
    categoria: "hogar",
    descripcion: "Set de 5 ollas Tramontina de acero inoxidable con fondo triplo y mangos ergonómicos",
    imagen: "https://via.placeholder.com/300x300?text=Ollas+Tramontina",
    stock: 7
  }
];

export const categorias = [
  { id: "tecnologia", nombre: "Tecnología" },
  { id: "ropa", nombre: "Ropa" },
  { id: "hogar", nombre: "Hogar" }
];

// Función para simular llamada asíncrona - obtener todos los productos
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};

// Función para simular llamada asíncrona - obtener productos por categoría
export const getProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
      resolve(productosFiltrados);
    }, 500);
  });
};

// Función para simular llamada asíncrona - obtener un producto por ID
export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(producto => producto.id === parseInt(id));
      resolve(producto);
    }, 500);
  });
};
