const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect to SQLite Database
const db = new sqlite3.Database('./collection.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected to the Retro Games database.');
});

db.serialize(() => {
    //Create the table
    db.run(`CREATE TABLE IF NOT EXISTS games
            (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                title       TEXT NOT NULL,
                platform    TEXT NOT NULL,
                releaseYear INTEGER,
                isComplete  BOOLEAN
            )`);

    // Check if the table is empty before seeding
    db.get("SELECT COUNT(*) as count FROM games", (err, row) => {
        if (row.count === 0) {
            console.log("Database empty. Seeding initial data...");

            const stmt = db.prepare("INSERT INTO games (title, platform, releaseYear, isComplete) VALUES (?, ?, ?, ?)");

            //TODO change these games
            stmt.run("Chrono Trigger", "SNES", 1995, 1);
            stmt.run("Sonic the Hedgehog 2", "Sega Genesis", 1992, 0);
            stmt.run("Zombies Ate My Neighbors", "SNES", 1993, 1);

            stmt.finalize(() => {
                console.log("Seeding complete.");
            });
        }
    });
});

app.get('/api/games', (req, res) => {
    db.all("SELECT * FROM games", [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json(rows);
    });
});

app.get('/api/games/search', (req, res) => {
    const platform = req.query.platform;
    db.all("SELECT * FROM games WHERE platform = ?", [platform], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json(rows);
    });
});

app.get('/api/platforms', (req, res) => {
    db.all("SELECT DISTINCT platform FROM games", [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        const platforms = rows.map(row => row.platform);
        res.json(platforms);
    });
});

app.post('/api/games', (req, res) => {
    const {title, platform, releaseYear, isComplete} = req.body;

    // Basic Validation
    if (!title || !platform) {
        return res.status(400).json({error: "Title and Platform are required"});
    }

    const sql = `INSERT INTO games (title, platform, releaseYear, isComplete)
                 VALUES (?, ?, ?, ?)`;
    db.run(sql, [title, platform, releaseYear, isComplete ? 1 : 0], function (err) {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({id: this.lastID, ...req.body});
    });
});

app.delete('/api/games/:id', (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM games WHERE id = ?", id, function (err) {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({message: "Deleted successfully", changes: this.changes});
    });
});

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
});
