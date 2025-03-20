const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// Ruta inicial para verificar que el servidor está activo
app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

// Cambia TU_URL_DE_MONGODB por una cadena válida
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amepp_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));


// Rutas para noticias
const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes);

// Escuchar en el puerto
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
