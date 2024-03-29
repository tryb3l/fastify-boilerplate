const fp = require("fastify-plugin");
module.exports = fp(
  function (fastify, opts, next) {
    fastify.addSchema(require("./dotenv.json"));
    next();
  },
  { name: "application-schemas" },
);
