const mongoose = require('mongoose');


// Connexion a la base de données MongoDb

mongoose.connect(
  "mongodb://localhost:27017/node-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connecté avec succés");
    else console.log("Erreur lors de la connexion avec mongoDb :" + err);
  }
)