const CommentRepository = require('../repository/commentRepository')

module.exports = class CommentService {
  static async list (postId) {
    console.log(`layer-service, postId: ${postId}`)
    return await CommentRepository.listByPostId(postId)
  }

  static async create (PostId, UserName, Comment) {
    console.log(`layer-service, PostId: ${PostId},UserName: ${UserName},Comment: ${Comment}`)
    return await CommentRepository.create(PostId, UserName, Comment)
  }
}
