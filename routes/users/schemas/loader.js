'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function schemaLoaderPlugin(fastify) {
  fastify.addSchema(require('./read-params.json'))
  fastify.addSchema(require('./update-user.json'))
  fastify.addSchema(require('./users-list-query.json'))
  fastify.addSchema(require('./users-list-respose.json'))
  fastify.addSchema(require('../../auth/schemas/user.json'))
})
