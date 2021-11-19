import express from 'express';
import UserController from './userController';

const userRouter = express.Router();

userRouter.get('/', UserController.getAllUsers);

userRouter.get('/:id', UserController.getUserById);

userRouter.get('/:loginSubstring/:limit', UserController.getAutoSuggestUsers);

userRouter.post('/', UserController.createUser);

userRouter.put('/:id', UserController.updateUserById);

userRouter.delete('/:id', UserController.deleteUserById);

export { userRouter };
