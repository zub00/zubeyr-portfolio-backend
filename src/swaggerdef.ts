import swaggerJSDoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Profile API",
      version: "1.0.0",
      description: "APIs for managing profiles",
    },
    servers: [
      {
        url: "http://localhost:3001", // Change this to your server URL
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Profile: {
          type: "object",
          properties: {
            name: { type: "string" },
            bio: { type: "string" },
            location: { type: "string" },
            nationality: { type: "string" },
            availability: { type: "boolean" },
            email: { type: "string", format: "email" }, // Assuming email format
            phone: { type: "string" },
            github: { type: "string" },
            twitter: { type: "string" },
            linkedin: { type: "string" },
            expectedSalary: { type: "number" },
            haveDrivingLicense: { type: "boolean" },
            noticePeriod: { type: "integer" },
            referees: { type: "string" }, // This can be an array or object depending on your data structure
            languages: { type: "string" }, // This can be an array or object depending on your data structure
            skills: { type: "string" }, // This can be an array or object depending on your data structure
          },
          required: ["name"], // Specify required properties
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Path to the files containing your API routes
};

// contacts

export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Your API',
    version: '1.0.0',
    description: 'API Documentation',
  },
  components: {
    schemas: {
      Contact: {
        type: 'object',
        properties: {
          fullName: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          // Optionally include other properties like createdAt, updatedAt if needed
        },
        required: ['fullName', 'email'],
      },
    },
  },
  paths: {
    '/api/contact': {
      post: {
        summary: 'Create a new contact entry',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Contact', // Reference to the Contact schema
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Contact', // Reference to the Contact schema
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
          },
        },
      },
      get: {
        summary: 'Get all contacts',
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Contact', // Reference to the Contact schema
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
          },
        },
      },
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
