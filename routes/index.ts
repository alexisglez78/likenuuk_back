import { Router } from 'express';
import mascotas from './mascota';

const app = Router();

app.use('/', mascotas);

export default app;