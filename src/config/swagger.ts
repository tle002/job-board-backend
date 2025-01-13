import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Job Board API',
            version: '1.0.0',
            description: 'API documentation for the Job Board backend',
        },
        components: {
            schemas: {
                Job: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The job ID',
                        },
                        title: {
                            type: 'string',
                            description: 'The job title',
                        },
                        company: {
                            type: 'string',
                            description: 'The company name',
                        },
                        location: {
                            type: 'string',
                            description: 'The job location',
                        },
                        salary: {
                            type: 'integer',
                            description: 'The job salary',
                        },
                        description: {
                            type: 'string',
                            description: 'The job description',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
