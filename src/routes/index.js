const express = require('express')
const router = express.Router()

router.use('/api/posts', require('./post'))
router.use('/api/comments', require('./comments'))

router.use('/', require('./root'))

module.exports = router
