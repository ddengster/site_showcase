
const express = require('express');
const app = express();
const cors = require('cors');

// server for authentication

app.use(cors());

app.use('/login', (req, res) => {
  // this should be replaced by a jwt token with an expiry
  res.send({ token: 'test123'}); 
});

app.listen(8080, () => console.log("API running on http://localhost:8080/login"));