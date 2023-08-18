const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
const apiRoutes = require('./routes');
const {sequelize,connectDB} = require('./db');

const app = express();
const PORT = 3002;

app.use('/api', apiRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, async ()=>{console.log(`server running in localhost:${PORT}`);
    await connectDB();
})

app.get('/', (request, response)=>{response.status(200).json({message: "Hello Disney World"})})