import express from 'express'; 
import marketRoutes from './routes/market.routes.js'; 

const app = express(); 

// Middleware para procesar JSON 
app.use(express.json()); 

// Middleware para procesar datos de formularios (opcional)
app.use(express.urlencoded({ extended: true })); 

// Rutas
app.use(marketRoutes); 

// Middleware para rutas no encontradas
app.use((req, res, next) => { 
  res.status(404).json({ 
    message: "Favor realizar pruebas en los siguientes endpoints:", 
    endpoints: [ 
      "https://apimarket-production-28fc.up.railway.app/usuarios", 
      "https://apimarket-production-28fc.up.railway.app/productos" 
    ] 
  }); 
}); 

export default app;
