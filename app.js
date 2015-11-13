import graphqlServer from './server';
import { StarWarsSchema } from './starWarsSchema.js';

graphqlServer(StarWarsSchema,8080);