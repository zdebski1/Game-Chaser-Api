import express from 'express';
import visitRoutes from './src/routes/visits';

const app = express();

app.use(express.json());
app.use('/api/visits', visitRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));