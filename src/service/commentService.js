const CommentRepository = require('../repository/commentRepository')
const Logger = require("../util/logger");

module.exports = class CommentService {
  static async list (postId) {
    Logger.info(`layer-service, postId: ${postId}`)
    return await CommentRepository.listByPostId(postId)
  }

  static async create (PostId, UserName, Comment) {
    Logger.info(`layer-service, PostId: ${PostId},UserName: ${UserName},Comment: ${Comment}`)
    return await CommentRepository.create(PostId, UserName, Comment)
  }
}
