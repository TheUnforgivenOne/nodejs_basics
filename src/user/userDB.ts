import { v4 as uuidv4 }  from 'uuid';
import { usersDBMock } from './mocks/userStorage.mock';
import { User } from './types/user.type';
import { byAlphabet } from './utils/sortByAlphabet';

class UserDB {
  private users: User[] = usersDBMock;

  getAllUsers() {
    return this.users;
  }

  getUserById(userId: string) {
    return this.users.find(({ id }) => id === userId);
  }

  createUser(user: Omit<User, 'id'>) {
    const newUser: User = { id: uuidv4(), ...user };
    this.users.push(newUser);

    return newUser;
  }

  updateUserById(userId: string, userData: Omit<User, 'id'>) {
    const userIndex = this.users.findIndex(({ id }) => id === userId);

    if (userIndex) {
      const updatedUser = { id: userId, ...userData };
      this.users[userIndex] = updatedUser;

      return updatedUser;
    }

    return;
  }

  deleteUserById(userId: string) {
    const userIndex = this.users.findIndex(({ id }) => id === userId);

    if (userIndex) {
      this.users[userIndex].isDeleted = true;

      return this.users[userIndex];
    }

    return;
  }

  getAutoSuggestUsers(loginSubstring: string, limit: number) {
    return this.users.filter(({ login }) => login.includes(loginSubstring)).sort(byAlphabet).slice(0, limit);
  }
}

export default new UserDB();
