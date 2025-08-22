require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>This is Verzo's api v3<h1>
        `);
});

app.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.send(`User profile for ${username}`);
});

app.get('/search', (req, res) => {
    const terms = req.query.q || 'No search query provided';
    const category = req.query.cat || 'all';
    console.log(`Search query: ${terms}, Category: ${category}`);
    res.send(`<h2>Search results for: ${terms}</h2>
              <p>Category: ${category}</p>`);
});

app.post('/form', (req, res) => {
    const name = req.body.name || 'Anonimo'
    const email = req.body.email || 'No proporcionado'
    res.json({
        message: 'Data received',
        data: {
            name,
            email
        }
    })
})

app.post('/api/data', (req, res) =>  {
    const data = req.body

    if (!data || Object.keys(data).length == 0) {
        return res.status(400).json({error: 'Data not received'})
    }

    res.status(201).json({
        message: 'JSON Data Received',
        data
    })
})

app.listen(PORT, () => {});
console.log(`Server is running on port http://localhost:${PORT}`);