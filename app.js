const express = require('express');
const path = require('path');
const app = express();
const port = 5001;

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Home', seccion: 'index' });
});

app.get('/nosotros', (req, res) => {
  res.render('index', { titulo: 'Nosotros', seccion: 'nosotros' });
});

app.get('/servicios', (req, res) => {
  res.render('index', { titulo: 'Servicios', seccion: 'servicios' });
});

app.get('/galeria', (req, res) => {
  res.render('index', { titulo: 'Galería', seccion: 'galeria' });
});

app.get('/contacto', (req, res) => {
  res.render('index', { titulo: 'Contacto', seccion: 'contacto' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
