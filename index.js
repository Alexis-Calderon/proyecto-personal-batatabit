const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static('public'))

app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);
