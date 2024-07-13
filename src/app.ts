import express from 'express';
import cors from 'cors';
import profileRoutes from './routes/profileRoutes';
import contactRoutes from './routes/contactMe'; // Ensure this path is correct
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerdef';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Ensure this matches your frontend's URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/profiles', profileRoutes); // Use '/api/profiles' for profile routes
app.use('/api/contacts', contactRoutes); // Use '/api/contacts' for contact routes

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
