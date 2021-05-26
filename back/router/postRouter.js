const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')
const authMiddleware = require('../middleware/authMiddleware')

//posts

router.post('/', authMiddleware, postController.create)
router.get('/:id', postController.getOne)
router.delete('/:id', authMiddleware, postController.delete)
router.get('/', postController.getAll)

//comments

router.post('/comment/:id', authMiddleware, postController.comment)
router.delete('/comment/:id', authMiddleware, postController.deleteComment)

//rating

router.put('/rate/up/:id', authMiddleware, postController.upVoite)
router.put('/rate/down/:id', authMiddleware, postController.downVoite)


module.exports = router