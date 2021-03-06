//Utilisation du framework Express pour faciliter le développement du serveur
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('./models');
//BodyParser pour transformer le corps de la requête en JSON
const bodyParser = require('body-parser');
//Router
const commentRoutes = require('./routes/Comment');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const corsOptions = {
  origin: 'http://localhost:8081',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Autoriser la requête sur le dossier statique images
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/messages', messageRoutes);
app.use('api/comments', commentRoutes);
app.use('/api/auth', userRoutes);
//Export d'express pour le "require" dans d'autres fichiers
module.exports = app;
