// v02

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { validationResult } from 'express-validator';
import { registerValidation } from './validations/auth.js';

import UserModel from './models/User.js';

// // Підключаємось до MongoDB
mongoose
  .connect(
    'mongodb+srv://crosskyiv:wwwwww@cluster0.f9fnpvo.mongodb.net/blog04?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB - ok'))
  .catch((err) => console.log('DB - error', err));

// Створюємо новий екземпляр додатку express
const app = express();
// // Використовуємо middleware для обробки JSON даних
app.use(express.json());

// Авторизація користувача
app.post('/auth/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return req.status(404).json({
        message: 'The User doesnt appear',
      });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return req.status(404).json({
        message: 'Is incorrect login or password',
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { passwordHash, ...userData } = user._doc;
    res.json({
      ...userData,
      token,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to log in',
    });
  }
});

// Реєстрація нового користувача
app.post('/auth/register', registerValidation, async (req, res) => {
  // Перевірка валідації даних користувача
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    // Генерування солі для хешування пароля
    const salt = await bcrypt.genSalt(10);
    // Хешування пароля з використанням солі
    const hash = await bcrypt.hash(password, salt);
    // Створення нового об'єкта користувача в БД
    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });
    // Збереження нового користувача в БД
    const user = await doc.save();
    // Створення JWT токена для автентифікації
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );
    // Відправка відповіді клієнту з даними нового користувача та JWT токеном
    const { passwordHash, ...userData } = user._doc;
    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to registerss',
    });
  }
});
// Запуск сервера на порту 3333
app.listen(3333, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});

// ********

// - v01
// import express from 'express';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import mongoose from 'mongoose';

// // validationResult ф-я , яка буде перевіряти є помилки при валідації, чи на
// import { validationResult } from 'express-validator';
// import { registerValidation } from './validations/auth.js';

// import UserModel from './models/User.js';

// // підключення  mongoose
// mongoose
//   .connect(
//     'mongodb+srv://crosskyiv:wwwwww@cluster0.f9fnpvo.mongodb.net/blog03?retryWrites=true&w=majority',
//   )
//   .then(() => console.log('DB - ok'))
//   .catch((err) => console.log('DB - error', err));

// const app = express();
// // вказуємо, що express повинен читати json
// app.use(express.json());

// // req - запит від клієнта
// // res - повідомлення для клієнта
// // req - отриманий від клієнта запит, res - відповідь клієнту

// // app.get('/', (req, res) => {
// //   res.send('Hello TEST');
// // });

// //  02 - виконання запиту - реєстрації на існуючий сервер
// // перевірка запиту-відповіді ві кл-та на необх.поля
// // req- відповідь кл-та на власну реєстрацію; res - відповідь сервера на присутність помилок
// app.post('/auth/register', registerValidation, async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       // повернення всіх помилок
//       return res.status(400).json(errors.array());
//     }

//     // passwordHash - save & salt pw; passwordHash- змінна збереження pw
//     const password = req.body.password;
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);

//     const doc = new UserModel({
//       email: req.body.email,
//       fullName: req.body.fullName,
//       avatarUrl: req.body.avatarUrl,
//       passwordHash: hash,
//     });

//     // User Create -> збереження документу у БД
//     const user = await doc.save();

//     // шифрування токену
//     const token = jwt.sign(
//       {
//         _id: user._id,
//       },
//       'secret123',
//       {
//         expiresIn: '30d',
//       },
//     );
//     // метод деструктуризації та спред оператором відфільтровуємо з показу: passwordHash
//     const { passwordHash, ...userData } = user._doc;

//     res.json({
//       ...userData,
//       token,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: 'Failed to registerss',
//     });
//   }
// });

// /* 01 - сервер відправляє повідомлення про  необхідність аторизації

// // app.post('/auth/login', (req, res) => {
// //   console.log(req.body);

// //   // генерація токена
// //   // 'secret123' - довільний ключ для кл-та
// //   const token =  jwt.sign({
// //     email: req.body.email,
// //     name: 'Peter Johnson'
// //   }, 'secret123')

// //   res.json({
// //     success: true,
// //     token
// //   });
// // });
// */

// // User create

// // 3333 - localhost ; app.listen -запуск сервера
// app.listen(3333, (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('Server OK');
// });
