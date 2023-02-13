const database = require('../config/database')
const Logger = require("../util/logger");

module.exports = class CommentRepository {
  static async listByPostId (postId) {
    Logger.info(`layer-Repository, postId: ${postId}`)
    const result = await database
      .select(
        'Id',
        'PostId',
        'UserName',
        'Comment',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Comments')
      .where('PostId', postId)
    Logger.info(`layer-Repository, postId: ${JSON.stringify(result)}`)
    return result
  }

  static async create (PostId, UserName, Comment) {
    Logger.info(`layer-Repository, PostId: ${PostId},UserName: ${UserName},Comment: ${Comment}`)
    const result = await database
      .insert({
        PostId,
        UserName,
        Comment
      })
      .into('Comments')
    Logger.info(`layer-Repository, postId: ${JSON.stringify(result)}`)
    return result
  }
}
