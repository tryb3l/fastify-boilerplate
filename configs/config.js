const fp = require("fastify-plugin");
const fastifyEnv = require("@fastify/env");
module.exports = fp(
  async function (fastify, opts, next) {
    await fastify.register(fastifyEnv, {
      confKey: "secrets",
      schema: fastify.getSchema("schema:dotenv"),
    });

    await fastify.decorate("config", {
      mongo: {
        forceClose: true,
        url: fastify.secrets.MONGO_URL,
      },
    });
    next();
  },
  { name: "application-config" },
);
