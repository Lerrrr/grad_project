const jwt = require('jsonwebtoken')
const  bcrypt = require('bcrypt')
const {User} = require('../models/schema')

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  registration = async (req, res) => {
    const {email, password, name} = req.body
    if(!email || !password || !name){
      return res.status(400).json({message: 'Вы не ввели все данные'})
    }
    const candidate = await User.findOne({where: {email}})
    if(candidate) {
      return res.status(404).json({message: 'Аккаунт с таким email уже существует'})
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, password: hashPassword, name})
    const token = generateJwt(user.id, user.email, user.role, user.name)
    return res.json({token})
  }

  login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if(!user) {
      return res.status(404).json({message: 'Такого пользователя не существует'})
    }
    const checkPassword = bcrypt.compareSync(password, user.password)
    if(!checkPassword) {
      return res.json({message: 'Пароль не верный'})
    }
    const token = generateJwt(user.id, user.email, user.role, user.name)
    return res.json({token})
  }

  check = async (req, res) => {
    const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.name)
    return res.json({token})
  }

}


module.exports = new UserController()