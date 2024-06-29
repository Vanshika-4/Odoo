import express from 'express';
import bodyParser from 'body-parser';
// import con from './utils/db';
import con from './utils/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
    con.query('SELECT * FROM todos', (err, results) => {
        if (err) {
            console.error('Error querying todos:', err);
            res.status(500).json({ error: 'Error querying todos' });
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

console.log("Hello World.");
