import express from 'express';
import cors from 'cors';
import profileRoutes from './routes/profileRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerdef';
import contactRoutes from './routes/contactMe';
import { swaggerDocument } from './swaggerdef';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Ensure this matches your frontend's URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', profileRoutes);
app.use('/api', contactRoutes);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
