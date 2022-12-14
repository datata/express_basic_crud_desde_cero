const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

let movies = [
    {
        id: 1,
        title: "el ciudadano ejemplar"
    },
    {
        id: 2,
        title: "rapidos y furiosos"
    },
    {
        id: 3,
        title: "resident evil"
    }
];

app.get('/welcome', (request, response) => {
    return response.send('Bienvenido a mi app');
});

app.get('/movies', (request, response) => {
    // Logica para recuperar la informacion de la bd de peliculas

    return response.json(movies);
});

app.post('/movies', (request, response) => {
    const title = request.body.title;
    const id = request.body.id;

    // console.log(title);
    // console.log(id);

    // logica con sequelize o con mongoose

    movies.push(
        {
            id: id,
            title: title
        }
    );

    return response.send('La pelicula ha sido creada');
});

app.put('/movies/:id', (request, response) => {
    const movieId = request.params.id;
    return response.send('Actualizar pelicula con id: ' + movieId);
});

app.delete('/movies/:id', (request, response) => {
    const movieId = request.params.id;

    const newMovieList = movies.filter((movie) => {
       return movie.id != movieId;
    });

    movies = newMovieList

    return response.json(movies);
});

app.listen(PORT, () => console.log('Server is running'));