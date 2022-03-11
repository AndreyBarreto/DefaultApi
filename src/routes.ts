import { Router } from 'express';

import ContactController from './app/controllers/ContactController';

const router = Router();

router.get('/contacs', ContactController.index);

export default router;
