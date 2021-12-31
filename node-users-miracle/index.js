const Joi = require('joi');
const express = require('express');
bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const request = require('request');

const app = express()

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req,res) => {
    res.redirect("https://jsonplaceholder.typicode.com/users");
 });

 // Joi validation
function validateUser(user){
  const schema = {
      name: Joi.string().min(3).required()
  };

  return Joi.validate(user, schema)
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log("Listening on port", port));




