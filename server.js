/* global __dirname */
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

var path = require('path');

mongoose.connect('mongodb://localhost/graphql');

export default function(schema, port) {
  var app = express();
  app.use(express.static(path.join(__dirname, 'static')));
  app.use('/graphql', graphqlHTTP(function() {
    return {
      schema: schema
    };
  }));

  app.use('/schema', function(req, res, _next) {
    var printSchema = require('graphql/utilities/schemaPrinter').printSchema;
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });

  app.listen(port);
  console.log(`Started on http://localhost:${port}/`);
}