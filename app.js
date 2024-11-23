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
/* 
app.get('/servicios', (req, res) => {
  res.render('index', { titulo: 'Servicios', seccion: 'servicios' });
}); */

app.get('/galeria', (req, res) => {
  res.render('index', { titulo: 'Galería', seccion: 'galeria' });
});

app.get('/login', (req, res) => {
  res.render('index', { titulo: 'Login', seccion: 'login' });
});
/* 
// Servir plantillas parciales como texto plano
app.get('/partial/:seccion', (req, res) => {
  const seccion = req.params.seccion;
  if (seccion === 'login') {
    res.render('login', { layout: false });
  } else {
    res.status(404).send('Sección no encontrada');
  }
}); */

// Manejador de errores para rutas no encontradas (404) 
app.use((req, res, next) => {
  res.status(404).render('error',
    {
      titulo: 'Página No Encontrada',
      mensaje: 'Lo sentimos, la página que estás buscando no existe.'
    });
});

// Manejador de errores del servidor (500) 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error',
    {
      titulo: 'Error Interno del Servidor',
      mensaje: 'Ha ocurrido un error en el servidor. Por favor, intenta nuevamente más tarde.'
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
