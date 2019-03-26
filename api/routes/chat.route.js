const express = require('express');
const app = express();
const chatRoutes = express.Router();

// Require Chat model in our routes module
let Chat = require('../models/Chat');

// Defined store route
chatRoutes.route('/add').post(function(req, res) {
  let chat = new Chat(req.body);
  chat.save()
    .then(chat => {
      res.status(200).json({'chat': 'Chat added successfully'});
    })
    .catch(err => {
      res.status(400).send('Unable to save to datable')
    });
});

// Defined get data (index or listing) route
chatRoutes.route('/').get(function(req, res) {
  Chat.find(function(err, chates) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(chates);
    }
  });
});

module.exports = chatRoutes;