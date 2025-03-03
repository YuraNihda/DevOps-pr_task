// app.js
const express = require('express');
const app = express();
const port = 3000;

// Простий маршрут
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
