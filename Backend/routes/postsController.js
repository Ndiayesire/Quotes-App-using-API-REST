const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

// Lecture de données

router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("rreur lors de la récupération des données : " + err);
  })
});


// Insertion de données

router.post('/', (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Erreur lors de la creation: ' + err);
  })
});


// Mise à jour de données

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id)
  
  const updateRecord = {
    author: req.body.author,
    message: req.body.message
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Erreur lors de la mise à jour : " + err);
    }
  )
});


// Suppression de données

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id)
  
  PostsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Erreur lors de la suppresion : " + err);
    })
});

module.exports = router;