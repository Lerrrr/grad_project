const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})
const Post = sequelize.define('post',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  heading: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.TEXT},
  img: {type: DataTypes.STRING},
  video: {type: DataTypes.STRING},
  rating: {type: DataTypes.INTEGER, defaultValue: 0}
})
const PostComment = sequelize.define('post_comment',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: {type: DataTypes.STRING, allowNull: false},
})
const PostRating = sequelize.define('post_rating',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: {type: DataTypes.INTEGER, allowNull: false},
})



User.hasMany(Post)
Post.belongsTo(User)


User.hasMany(PostRating)
PostRating.belongsTo(User)
Post.hasMany(PostRating)
PostRating.belongsTo(Post)


User.hasMany(PostComment)
PostComment.belongsTo(User)
Post.hasMany(PostComment)
PostComment.belongsTo(Post)


module.exports = {
  User, Post, PostComment, PostRating
}



