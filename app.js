const express = require('express');
const app = express();
app.use(express.json());

const activoController = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.1\\Controladores\\activoController');
const responsableController = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.1\\Controladores\\responsableController');
const ubicacionController = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.1\\Controladores\\ubicacionController');

app.post('/activos', activoController.createActivo);
app.get('/activos', activoController.getAllActivos);
app.put('/activos/:id', activoController.updateActivo);
app.delete('/activos/:id', activoController.deleteActivo);

app.post('/responsables', responsableController.createResponsable);
app.get('/responsables', responsableController.getAllResponsables);
app.put('/responsables/:idResponsable', responsableController.updateResponsable);
app.delete('/responsables/:idResponsable', responsableController.deleteResponsable);

app.post('/ubicaciones', ubicacionController.createUbicacion);
app.get('/ubicaciones', ubicacionController.getAllUbicaciones);
app.put('/ubicaciones/:idUbicacion', ubicacionController.updateUbicacion);
app.delete('/ubicaciones/:idUbicacion', ubicacionController.deleteUbicacion);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});