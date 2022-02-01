
const express = require('express');
const app = express();
const cors = require('cors');

// server for authentication

app.use(cors());

app.use('/login', (req, res) => {
  // this should be replaced by a jwt token with an expiry
  res.send({ token: 'test123'}); 
});

app.use('/user_chart', (req, res) => {
  const data = [
    {
      name: 'A',
      uv: 100,
      pv: 100,
      amt: 200
    },
    {
      name: 'B',
      uv: 2000,
      pv: 300,
      amt: 400
    },
    {
      name: 'C',
      uv: 500,
      pv: 600,
      amt: 700
    },
    {
      name: 'D',
      uv: 1100,
      pv: 1200,
      amt: 2400
    },
  ];
  res.send(data);
});

app.listen(8080, () => console.log("API running on http://localhost:8080/"));