import express from "express";

const port = 8080;
const app = express();

// Iniciar el servidor Express
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

// Ruta de ejemplo que causa una excepción no manejada
app.get('/ejemplo', (req, res, next) => {
    // Generamos una excepción intencional
    throw new Error('Esta es una excepción no manejada');
});

// Middleware de manejo de errores personalizado luego de la definición de las rutas
app.use((error, req, res, next) => {
    console.error('Error:', error.message);

    // Respuesta de error personalizada
    res.status(500).send('Se produjo un error en el servidor.');
});
