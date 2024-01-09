"use strict";
const fp = require("fastify-plugin");
module.exports = fp(async function schemaLoaderPlugin(fastify, opts) {
  fastify.addSchema(require("./list-query.json"));
  fastify.addSchema(require("./list-response.json"));
  fastify.addSchema(require("./create-body.json"));
  fastify.addSchema(require("./create-response.json"));
  fastify.addSchema(require("./status-params.json"));
  fastify.addSchema(require("./status-response.json"));
  fastify.addSchema(require("./note.json"));
  fastify.addSchema(require("./read-params.json"));
  fastify.addSchema(require("./update-body.json"));
});
