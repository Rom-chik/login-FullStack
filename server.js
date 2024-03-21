import express from 'express';
import pool from './db.js';
import bodyParser from 'body-parser';

const app = express();


const PORT = 3000;
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use(bodyParser.json());


//get data from database
app.get('/getItems', async (req, res) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM users');
        console.log(rows);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});