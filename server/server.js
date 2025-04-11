const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//Statische Dateien
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Routen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Kontaktformular-POST
app.post('/contact', (req, res) => {
    console.log('Kontaktanfrage:', req.body);
    res.send('Danke für deine Nachricht!');
});

//Server starten
app.listen(PORT, () => {
    console.log(`Fitness-Webseite läuft auf http://localhost:${PORT}`);
});