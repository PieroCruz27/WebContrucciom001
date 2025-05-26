const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el archivo 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina1.html'));
});
app.get('/historias', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'historias.html'));
  });
  
  app.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'servicios.html'));
  });
  
  app.get('/comunidad', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comunidad.html'));
  });
  
  app.get('/unete', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'unete.html'));
  });
  
  app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
  });
 
// Ruta para la página Yango
app.get('/yango', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'yango.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
