// seed.js
// Uso: node seed.js
// Requisitos: npm i firebase-admin
// Debes tener serviceAccountKey.json en la raíz (no subirla al repo)

const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const serviceAccountPath = path.join(__dirname, "serviceAccountKey.json");

if (!fs.existsSync(serviceAccountPath)) {
  console.error("No se encontró serviceAccountKey.json en la raíz. Colocá tu clave y volvé a intentar.");
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Nombre de la colección
const COLLECTION = "productos";

const db = admin.firestore();

async function seed() {
  try {
    const dataPath = path.join(__dirname, "products.json");
    if (!fs.existsSync(dataPath)) {
      console.error("No se encontró products.json. Crealo a partir del ejemplo.");
      process.exit(1);
    }

    const raw = fs.readFileSync(dataPath, "utf8");
    const products = JSON.parse(raw);

    console.log(`Se encontraron ${products.length} productos. Iniciando seed...`);

    for (const product of products) {
      const docRef = db.collection(COLLECTION).doc(); // id automático
      await docRef.set(product);
      console.log(`Creado: ${product.title} (id: ${docRef.id})`);
    }

    console.log("Seed completado correctamente.");
    process.exit(0);
  } catch (err) {
    console.error("Error al ejecutar seed:", err);
    process.exit(1);
  }
}

seed();
