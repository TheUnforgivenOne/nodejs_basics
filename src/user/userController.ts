import { Request, Response } from 'express';
import { User } from './types/user.type';
import UserDB from './userDB';

class UserController {
  getAllUsers(req: Request, res: Response) {
    const users: User[] = UserDB.getAllUsers();

    res.json({ status: 200, payload: users });
  }

  getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user: User = UserDB.getUserById(id);

    !user && res.json({ status: 400, message: `No user with given id: ${id}` });

    res.json({ status: 200, payload: user });
  }

  getAutoSuggestUsers(req: Request, res: Response) {
    const { loginSubstring, limit } = req.params;
    const users: User[] = UserDB.getAutoSuggestUsers(loginSubstring, Number(limit));

    !users && res.json({ status: 400, message: `No users with given substring: ${loginSubstring} and limit: ${limit}` });

    res.json({ status: 200, payload: users });
  }

  createUser(req: Request, res: Response) {
    const newUser = UserDB.createUser(req.body);

    !newUser && res.json({ status: 400, message: 'Failed to create a new user' });

    res.json({ status: 201, payload: newUser });
  }

  updateUserById(req: Request, res: Response) {
    const { id } = req.params;
    const updatedUser = UserDB.updateUserById(id, req.body);

    !updatedUser && res.json({ status: 400, message: 'Failed to update a user' });

    res.json({ status: 200, payload: updatedUser });
  }

  deleteUserById(req: Request, res: Response) {
    const { id } = req.params;
    const deletedUser = UserDB.deleteUserById(id);

    !deletedUser && res.json({ status: 400, message: 'Failed to delete a user' });

    res.json({ status: 200, payload: deletedUser });
  }
}

export default new UserController();
