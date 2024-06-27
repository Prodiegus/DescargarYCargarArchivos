console.log('Creando usuario y colección en MongoDB...');
db = db.getSiblingDB('cargarbajar');
console.log('Creando colección archivos...');
db.createCollection('archivos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['archivo', 'tipo_archivo', 'nombre_archivo', 'mensaje'],
            properties: {
                archivo: {
                    bsonType: 'binData',
                    description: 'must be a binary data and is required'
                },
                tipo_archivo: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                nombre_archivo: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                mensaje: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                }
            }
        }
    }
});
db.insertOne({
    archivo: new BinData(0, 'AAECAwQFBgcICQoLDA0ODw=='),
    tipo_archivo: 'txt',
    nombre_archivo: 'archivo1',
    mensaje: 'Archivo de texto 1'
});
console.log('Usuario y colección creados correctamente');