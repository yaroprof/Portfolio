import {body} from 'express-validator';

export const registerValidation = [
  body('email', 'email is incorrect format').isEmail(),
  body('password', 'pw must be min 5 signs').isLength({min: 5}),
  body('fullName', 'name must be min 3 signs').isLength({min: 3}),
  body('avatarUrl', 'URL must have any links').optional().isURL(),
];