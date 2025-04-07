const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('MySQL + Express connected!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
