import { User } from '../types/user.type';

export const byAlphabet = (a: User, b: User) => {
  if (a.login < b.login) return -1;
  if (b.login < a.login) return 1;
  return 0;
};
