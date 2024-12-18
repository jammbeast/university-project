require('dotenv').config({ path: './api.env' });
const cors = require('cors');
const express = require('express');
const { get } = require('axios');
// const mongoose = require('mongoose')
// const authRouter = require('./authRouter')

const app = express();
// app.use(express.json())
// app.use( "/auth",authRouter)
app.use(cors());

const PORT = process.env.PORT || 3001;



app.get('/api/movies', async (req, res) => {
    try {
        const response = await get(`https://api.themoviedb.org/3/movie/now_playing`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                page: 1
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from TMDb');
    }
});

app.get('/api/tvShows', async (req, res) => {
    try {
        const response = await get(`https://api.themoviedb.org/3/discover/tv`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                'first_air_date.gte' : '2024-09-01',
                'vote_average.gte' : 7,
                language: 'en-US'
            }   
        });
        res.json(response.data);
    } catch(error){
        console.error(error);
        res.status(500).send('Error fetching data from TMDb');
    }

});
app.get('/api/upcoming', async (req, res)=>
{
    try{
        const response = await get(`https://api.themoviedb.org/3/movie/upcoming`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                page : 1
            }
    });
            res.json(response.data);
            
} catch(error)
    {
        console.error(error);
        res.status(500).send('Error fetching data from TMDb');
    }
});
app.get('/api/search', async (req, res) => {
    try {
        const query = req.query.query;
        const response = await get(`https://api.themoviedb.org/3/search/multi`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                query,
                page: 1
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching search results from TMDb:', error);
        res.status(500).send('Error fetching search results');
    }
});

app.get('/api/movie/search', async (req, res) => {
    try {
        const query = req.query.query;
        const response = await get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                page : 1,
                query}
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching search results from TMDb:', error);
        res.status(500).send('Error fetching search results')
    }
});

app.get('/api/tv/search', async (req, res) => {
    try {
        const query = req.query.query;
        const response = await get(`https://api.themoviedb.org/3/search/tv`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language : 'ru-RU',
                query,
                page : 1
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching search results from TMDb:', error);
        res.status(500).send('Error fetching search results')
    }
})
app.get('/api/movie/:id', async (req, res) =>{
    try{
        const {id} = req.params;
        const response = await get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language : 'en-US'
    
    }
});
res.json(response.data);
} catch(error){
    console.error(error);
    res.status(500).send('Error fetching data from TMDb');
}
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log(process.env.TMDB_API_KEY);


// const start = async () => {
// 	try {
// 		await mongoose.connect(
// 			`mongodb+srv://levkaflower:<228red228>@cluster0.uiitu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// 		)
// 		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
// 	} catch (e) {
// 		console.log(e)
// 	}
// }

// start()


