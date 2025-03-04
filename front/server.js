const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Дозволяємо CORS
app.use(cors());

// Дозволяємо обробку JSON-даних
app.use(bodyParser.json());

// Вказуємо папку для статичних файлів
app.use(express.static(path.join(__dirname)));

// Запускаємо сервер
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// створюємо з'єднання 
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

connection.connect(err => {
  if (err) {
    console.log('помилка підключенн: ', err)
    return;;
  }
  console.log('Підключення до mysql')

  connection.query('SELECT user, host FROM mysql.user;', (error, result) => {
    if (error) throw error;
    console.log(result);
  });

  connection.end();
})

