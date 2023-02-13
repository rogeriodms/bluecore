const CommentService = require('../service/commentService')
const Logger = require("../util/logger");

module.exports = class CommentController {
  static list (request, response, next) {
      Logger.info(`layer-Controllers, Request: ${request}, Response: ${response}`)
    CommentService.list(request.params.id)
      .then((unities) => {
        Logger.info(`layer-Controllers, unities: ${JSON.stringify(unities)}`)
        return response.status(200).send(unities)
      })
      .catch(next)
  }

  static create (request, response, next) {
    Logger.info(`layer-Controllers-create, Request: ${JSON.stringify(request.body)}, Response: ${response}`)
    const { PostId, UserName, Comment } = request.body
    CommentService.create(PostId, UserName, Comment)
      .then((unities) => {
        Logger.info(`layer-Controllers, unities: ${JSON.stringify(unities)}`)
        return response.status(200).send(unities)
      })
      .catch(next)
  }
}
