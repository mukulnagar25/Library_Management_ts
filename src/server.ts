import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import { logger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
