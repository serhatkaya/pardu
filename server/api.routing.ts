import express from 'express';
import userCtrl from './controllers/user.controller';

const router = express.Router();

router.use('/users', userCtrl);

export default router;
