import joi from 'joi';
import { User } from '../types/user.type';

const schema = joi.object().keys({
  login: joi.string().alphanum().min(3).max(10).required(),
  password: joi.string().alphanum().required(),
  age: joi.number().min(4).max(130).required(),
  isDeleted: joi.boolean().required()
});

export const validateUser = (user: Omit<User, 'id'>) => {
  return schema.validate(user, { abortEarly: false });
};
