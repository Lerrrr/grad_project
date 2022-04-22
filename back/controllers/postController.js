const uuid = require('uuid')
const path = require('path')
const {User, Post, PostComment, PostRating} = require('../models/schema')
const { Op, Sequelize } = require('sequelize')

class PostController {

  async create(req, res) {
    let { heading, description} = req.body

    let imgFilename
    let videoFilename
    if (req.files) {
      const { img, video } = req.files

      if(img){
        imgFilename = uuid.v4() + '.jpg'
        await img.mv(path.resolve(__dirname, '..', 'static/img', imgFilename))
      }
      if(video){
        videoFilename = uuid.v4() + '.mp4'
        await video.mv(path.resolve(__dirname, '..', 'static/video', videoFilename))
      }

    }

    const device = await Post.create({heading, description, img: imgFilename,
      video: videoFilename, userId: req.user.id})

    return res.json(device)
  }

  async getOne(req, res) {
    const { id } = req.params
    const post = await Post.findOne({
      where: {id},
      include: [{
        model: PostComment,
        include: [{model: User, attributes: ['name']}]
      }]
    })
    return res.json(post)
  }

  async getAll(req, res) {
    const posts = await Post.findAll({
        include: [{model: User, attributes: ['name']},{
        model: PostComment,
        include: [{model: User, attributes: ['name']}]
      }]})
    return res.json(posts)
  }

  async delete(req, res) {
    const { id } = req.params
    let post = Post.findOne({where: {id, userId: req.user.id}})
    if(!post){
      return res.status(403).json({message: 'Нет доступа'})
    }
    post = await Post.destroy({where: {id}})
    if(post){
      return res.json(true)
    }else{
      return res.json(false)
    }
  }

  async comment(req, res) {
    const { id } = req.params
    const { text } = req.body
    const comment = await PostComment.create({text, userId: req.user.id, postId: id})
    return res.json(comment)
  }

  async deleteComment(req, res) {
    const { id } = req.params
    let comment = PostComment.findOne({where: {id, userId: req.user.id, postId: id}})
    if(!comment){
      return res.status(403).json({message: 'Нет доступа'})
    }
    comment = await PostComment.destroy({where: {id}})
    if(comment){
      return res.json(true)
    }else{
      return res.json(false)
    }
  }

  async upVoite(req, res) {
    const { id } = req.params
    const userId = req.user.id

    const rate = await PostRating.findOne({
      where: { userId, postId: id }
    })
    if(rate){
      await PostRating.update({rate: 1},{
        where: { userId, postId: id }
      })
    }else{
      await PostRating.create({
        userId, postId: id, rate: 1
      })
    }
    const newRating = await PostRating.findOne({
      where: { postId: id },
      attributes: [[Sequelize.fn('SUM', Sequelize.col('rate')),'rating']]
    })
    let rating = newRating.dataValues.rating
    await Post.update({rating},{where: { id }})
    res.json(true)
  }

  async downVoite(req, res) {
    const { id } = req.params
    const userId = req.user.id

    const rate = await PostRating.findOne({
      where: { userId, postId: id }
    })
    if(rate){
      await PostRating.update({rate: -1},{
        where: { userId, postId: id }
      })
    }else{
      await PostRating.create({
        userId, postId: id, rate: -1
      })
    }
    const newRating = await PostRating.findOne({
      where: { postId: id },
      attributes: [[Sequelize.fn('SUM', Sequelize.col('rate')),'rating']]
    })
    let rating = newRating.dataValues.rating
    await Post.update({rating},{where: { id }})
    res.json(true)
  }

}

module.exports = new PostController()
