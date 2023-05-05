// 001
const express = require('express');
// 002
const mongoose = require('mongoose')
// 003 
const articleRouter = require('./routes/articles');
// 004
const app = express();
// 005
mongoose.connect('mongodb://localhost/blog', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true })

 
//- 01
app.set('view engine', 'ejs');


//- 02
app.use(express.urlencoded({ extended: false }))

//- 03
app.get('/', (req, res) => { 
  const articles = [
    {
      title: 'Test article 1',
      createdAt: new Date(),
      description: 'Test description',
    },
    {
      title: 'Test article 2',
      createdAt: new Date(),
      description: 'Test description',
    },
  ];

  res.render('articles/index', { articles: articles });
});
app.use('/articles', articleRouter);

app.listen(5000);


// 001- const express = require('express');: Цей рядок імпортує фреймворк Express.js та присвоює його константі з назвою express. Це дозволяє додатку використовувати функціональні можливості, які надає бібліотека Express.js.

// 002- const mongoose = require('mongoose'): Цей рядок імпортує бібліотеку Mongoose та присвоює її константі з назвою mongoose. Mongoose є бібліотекою, яка надає шар взаємодії з базою даних MongoDB, що полегшує взаємодію з базою даних з допомогою Node.js.

// 003 const articleRouter = require('./routes/articles');: Цей рядок імпортує модуль articleRouter з файлу ./routes/articles.js. Модуль articleRouter - це набір маршрутів, які обробляють HTTP-запити, що стосуються статей.

// 004 
// const app = express();: Цей рядок створює екземпляр додатку Express.js та присвоює його константі з назвою app. Об'єкт app використовується для налаштування додатку та визначення маршрутів, які обробляють HTTP-запити.

// 005 
// mongoose.connect('mongodb://localhost/blog', { useNewUrlParse: true, useUnifiedTopology: true }): Цей рядок підключається до бази даних MongoDB з назвою blog, яка працює на локальній машині (localhost). Другий аргумент є об'єктом параметрів, який вказує використовувати новий парсер URL-адрес та об'єднану топологію для драйвера MongoDB. Це необхідно для того, щоб Mongoose працював правильно з останньою версією MongoDB.

// - 01
// Цей код використовується для встановлення шаблонізатора для додавання HTML-сторінок на сервер. app.set('view engine', 'ejs') встановлює EJS (Embedded JavaScript) як шаблонізатор.
// Щоб використовувати EJS, треба створити файли з розширенням .ejs, які містять HTML-код та вбудований JavaScript. Потім можна передавати дані з сервера в шаблон та відображати їх на сторінці.

//- 02

// -  03
// Викликає метод get об'єкту app (створеного з express) з двома параметрами: рядком '/', який вказує на шлях, і колбек-функцією (req, res) => { res.send('Hello') }, яка буде виконана, коли прийде запит на шлях '/'.
// Коли сервер отримує запит на шлях '/', він виконує колбек-функцію і передає об'єкти req і res як параметри.
// Колбек-функція відправляє рядок 'Hello' у відповідь сервера за допомогою методу send об'єкту res.
// Коли клієнт зробить запит на '/', він отримає відповідь з рядком 'Hello'.
