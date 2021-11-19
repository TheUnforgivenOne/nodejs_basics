import express from 'express';
import { userRouter } from './user/userRouter';

const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log('Server is running on port', PORT));

app.use(express.json());
app.use('/users', userRouter);
