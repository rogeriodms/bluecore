const database = require('../config/database')

module.exports = class CommentRepository {
  static async listByPostId (postId) {
    console.log(`layer-Repository, postId: ${postId}`)
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
    console.log(`layer-Repository, postId: ${JSON.stringify(result)}`)
    return result
  }

  static async create (PostId, UserName, Comment) {
    console.log(`layer-Repository, PostId: ${PostId},UserName: ${UserName},Comment: ${Comment}`)
    const result = await database
      .insert({
        PostId,
        UserName,
        Comment
      })
      .into('Comments')
    console.log(`layer-Repository, postId: ${JSON.stringify(result)}`)
    return result
  }
}
