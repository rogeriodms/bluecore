const dotenv = require('dotenv')
dotenv.config()

const app = require('./app')
const Logger = require("./util/logger");

const server = require('http').createServer(app)

const port = process.env.PORT || '3000'

server.listen(port, () => {
  Logger.info(`Ouvindo porta ${port}`);
})
