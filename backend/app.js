require('dotenv').config(); // Cargar las variables de entorno
const express = require('express');
const { MongoClient } = require('mongodb');
const { Binary } = require('bson');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const app = express();
  
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'OPTIONS'], 
    allowedHeaders: '*'
}));
  
const privateKey = fs.readFileSync('localhost.key', 'utf8');
const certificate = fs.readFileSync('localhost.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };
  
https.createServer(credentials, app).listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
  res.send('backend de validacion de datos');
});

app.post('/cargar', async (req, res) => {
  const { bin, tipo_archivo, nombre_archivo, mensaje } = req.body;
  const client = await connectToMongo();
  if (!client) {
      return res.status(500).send('Error al conectar con la base de datos');
  }
  try {
      console.log('Variables de ent')
      console.log('Nombre de la base de datos:', process.env.DB_NAME);
      console.log('Nombre de la coleccion:', process.env.DB_COLLECTION);

      const db = client.db(process.env.DB_NAME);
      const collection = db.collection(process.env.DB_COLLECTION);
      await collection.insertOne({
          archivo: new Binary(Buffer.from(bin, 'base64')),
          tipo_archivo,
          nombre_archivo,
          mensaje
      });
  } catch (error) {
      console.error('Error al cargar datos:', error);
      res.status(500).send('Error al cargar datos');
  } finally {
      await client.close();
  }
  res.send('Datos cargados');
});

app.get('/bajar', async (req, res) => {
  const client = await connectToMongo();
    if (!client) {
        return res.status(500).send('Error al conectar con la base de datos');
    }
    try {
        console.log('Variables de ent')
        console.log('Nombre de la base de datos:', process.env.DB_NAME);
        console.log('Nombre de la coleccion:', process.env.DB_COLLECTION);

        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.DB_COLLECTION);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error al recuperar datos:', error);
        res.status(500).send('Error al recuperar datos');
    } finally {
        await client.close();
    }
});

// Middleware para redirigir todas las demás solicitudes a '/'
app.use((req, res, next) => {
  res.redirect('/');
});

async function connectToMongo() {
  console.log('Conectando a MongoDB...');
  console.log('URL de conexión:', process.env.MONGO_URL);
  const client = new MongoClient(process.env.MONGO_URL);
  try {
      await client.connect();
      return client;
  } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
  }
}
