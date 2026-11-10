const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory "Database"
let guests = [
    { id: 1, name: "Alice", message: "Can't wait!", plusOne: true }
];

// GET: Fetch all guests
app.get('/api/guests', (req, res) => {
    res.json(guests);
});

// POST: Add a new guest
app.post('/api/guests', (req, res) => {
    const newGuest = {
        id: guests.length + 1, //ID is just the next index in the array, NOT best practice
        name: req.body.name,
        message: req.body.message,
        plusOne: req.body.plusOne
    };

    guests.push(newGuest);
    res.status(201).json(newGuest); // 201 means "Created"
});

app.listen(PORT, () => {
    console.log(`REST API running at http://localhost:${PORT}`);
});