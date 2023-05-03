const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

//- 01
app.set('view engine', 'ejs');

//- 02
app.use('/articles', articleRouter);

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

app.listen(5000);

// - 01
// Цей код використовується для встановлення шаблонізатора для додавання HTML-сторінок на сервер. app.set('view engine', 'ejs') встановлює EJS (Embedded JavaScript) як шаблонізатор.
// Щоб використовувати EJS, треба створити файли з розширенням .ejs, які містять HTML-код та вбудований JavaScript. Потім можна передавати дані з сервера в шаблон та відображати їх на сторінці.

//- 02

// -  03
// Викликає метод get об'єкту app (створеного з express) з двома параметрами: рядком '/', який вказує на шлях, і колбек-функцією (req, res) => { res.send('Hello') }, яка буде виконана, коли прийде запит на шлях '/'.
// Коли сервер отримує запит на шлях '/', він виконує колбек-функцію і передає об'єкти req і res як параметри.
// Колбек-функція відправляє рядок 'Hello' у відповідь сервера за допомогою методу send об'єкту res.
// Коли клієнт зробить запит на '/', він отримає відповідь з рядком 'Hello'.
