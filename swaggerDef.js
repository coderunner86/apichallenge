const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '2.0',
    info: {
      title: 'Disney API',
      version: '1.0.0',
      description: 'API documentation for Disney API'
    }
  },
  // Specify the path to your routes.js file
  apis: ['./routes.js']
};

const swaggerDocument = swaggerJsdoc(options);

module.exports = swaggerDocument;
