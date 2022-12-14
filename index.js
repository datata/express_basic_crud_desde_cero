const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/welcome', (request, response) => {
    return response.send('Bienvenido a mi app');
});

app.get('/movies', (request, response) => {
    return response.send('Recuperando peliculas');
});

app.post('/movies', (request, response) => {
    const title = request.body.name;

    return response.send('La pelicula que quiero guardar en bd es ' + title);
});

app.put('/movies/:id', (request, response) => {
    const movieId = request.params.id;
    return response.send('Actualizar pelicula con id: ' + movieId);
});

app.delete('/movies', (request, response) => {
    return response.send('Eliminar pelicula');
});

app.listen(PORT, () => console.log('Server is running'));