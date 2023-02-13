const express = require('express')
const router = express.Router()

const CommentsController = require('../controllers/commentController')

router.get('/:id', CommentsController.list)
router.post('/addComment', CommentsController.create)
module.exports = router
