// article.js - це модуль Node.js, який визначає схему (структуру) статей блогу і їхній метод збереження в базі даних. Модуль використовує пакет mongoose для взаємодії з MongoDB.

// В модулі article.js описується схема статей за допомогою mongoose.Schema, яка включає поля, такі як заголовок, автор, дата публікації і текст статті. Потім оголошується модель Article, що відповідає колекції документів articles в MongoDB.

// Модуль article.js містить функції для взаємодії з базою даних, такі як збереження статті у базу даних за допомогою методу .save(), отримання списку всіх статей з бази даних за допомогою методу .find(), отримання статті за її ID за допомогою методу .findById(), тощо.

const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  }
})


// const Article = mongoose.model('Article', articleSchema);

module.exports = mongoose.model('Article', articleSchema)




// IMPORT
// const marked = require('marked')
// const slugify = require('slugify')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')
// const dompurify = createDomPurify(new JSDOM().window)


// CONCLUSIONS

// articleSchema.pre('validate', function(next) {
//   if (this.title) {
//     this.slug = slugify(this.title, { lower: true, strict: true })
//   }

//   if (this.markdown) {
//     this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
//   }

//   next()
// })