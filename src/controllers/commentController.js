const CommentService = require('../service/commentService')

module.exports = class CommentController {
  static list (request, response, next) {
    console.log(`layer-Controllers, Request: ${request}, Response: ${response}`)
    CommentService.list(request.params.id)
      .then((unities) => {
        console.log(`layer-Controllers, unities: ${JSON.stringify(unities)}`)
        return response.status(200).send(unities)
      })
      .catch(next)
  }

  static create (request, response, next) {
    console.info(`layer-Controllers-create, Request: ${JSON.stringify(request.body)}, Response: ${response}`)
    const { PostId, UserName, Comment } = request.body
    CommentService.create(PostId, UserName, Comment)
      .then((unities) => {
        console.log(`layer-Controllers, unities: ${JSON.stringify(unities)}`)
        return response.status(200).send(unities)
      })
      .catch(next)
  }
}
