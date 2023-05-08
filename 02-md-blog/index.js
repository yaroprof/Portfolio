import express from 'express';
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

// validationResult ф-я , яка буде перевіряти є помилки при валідації, чи на
import { validationResult } from 'express-validator';
import { registerValidation } from './validations/auth.js';

import UserModel from './models/User.js';

// підключення  mongoose
mongoose
  .connect(
    'mongodb+srv://crosskyiv:wwwwww@cluster0.f9fnpvo.mongodb.net/blog?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB - ok'))
  .catch((err) => console.log('DB - error', err));

const app = express();
// вказуємо, що express повинен читати json
app.use(express.json());

// req - запит від клієнта
// res - повідомлення для клієнта
// req - отриманий від клієнта запит, res - відповідь клієнту

// app.get('/', (req, res) => {
//   res.send('Hello TEST');
// });

//  02 - виконання запиту - реєстрації на існуючий сервер
// перевірка запиту-відповіді ві кл-та на необх.поля
// req- відповідь кл-та на власну реєстрацію; res - відповідь сервера на присутність помилок
app.post('/auth/register', registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // повернення всіх помилок
    return res.status(400).json(errors.array());
  }


  // passwordHash - save & salt pw; passwordHash- змінна збереження pw
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    avatarUrl: req.body.avatarUrl,
    passwordHash,
  });

    // User Create -> збереження документу у БД
  const user = await doc.save()

  res.json({
    success: true,
  });
});

/* 01 - сервер відправляє повідомлення про  необхідність аторизації

// app.post('/auth/login', (req, res) => {
//   console.log(req.body);

//   // генерація токена
//   // 'secret123' - довільний ключ для кл-та
//   const token =  jwt.sign({
//     email: req.body.email,
//     name: 'Peter Johnson'
//   }, 'secret123')

//   res.json({
//     success: true,
//     token
//   });
// });
*/

// User create

// 3333 - localhost ; app.listen -запуск сервера
app.listen(3333, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
