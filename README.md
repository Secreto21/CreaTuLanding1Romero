# E-commerce React App

Este proyecto es una aplicación web de e-commerce desarrollada con React. Permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, agregar items al carrito y realizar compras.

## Características

- Catálogo de productos con filtrado por categorías
- Vista detallada de productos
- Carrito de compras
- Sistema de checkout
- Integración con Firebase/Firestore
- Diseño responsive

## Tecnologías Utilizadas

- React
- React Router DOM
- Firebase/Firestore
- CSS

## Estructura del Proyecto

```
src/
  ├── components/
  │   ├── Cart/
  │   ├── ItemList/
  │   ├── ItemDetail/
  │   ├── Checkout/
  │   └── NavBar/
  ├── context/
  │   └── CartContext.js
  ├── firebase/
  │   └── config.js
  └── App.js
```

## Instalación y Configuración

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Configura las variables de entorno de Firebase en el archivo `.env`
4. Inicia la aplicación con `npm start`

## Configuración de Firebase y carga de productos

Este proyecto utiliza Firestore para almacenar los productos y las órdenes de compra.
**Importante:** Los datos de Firestore no se suben a GitHub, cada usuario debe crear su propia base de datos.

### Pasos para configurar Firestore

1. Crea un proyecto en [Firebase](https://console.firebase.google.com/).
2. Habilita Firestore Database en modo de prueba.
3. Crea una colección llamada `productos` y agrega documentos con la siguiente estructura:

```json
{
  "title": "Laptop Pro X1",
  "description": "Laptop de última generación con procesador i7, 16GB RAM, 512GB SSD",
  "price": 1299.99,
  "stock": 10,
  "category": "laptops",
  "pictureUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
}
```

Puedes agregar más productos cambiando los valores de los campos.

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:

```
REACT_APP_FIREBASE_API_KEY=tu-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=tu-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=tu-app-id
```

**No subas tus credenciales reales a GitHub.**

## Scripts Disponibles

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
