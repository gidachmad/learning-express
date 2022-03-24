const db = require('../config/database')
const bcrypt = require('bcrypt')
const saltRound = 10


exports.getUser = (req, res) => {
  var sql = 'SELECT * FROM user'
  db.query(sql, function (err, result) {
    if (err) throw err
    res.json(result)
  })
}

exports.createNewUser = async (req, res) => {
  var sql = 'INSERT INTO user SET ?'
  const password = req.body.password
  const encryptedPassword = await bcrypt.hash(password, saltRound)
  var data = {
    username: req.body.username,
    encryptedPassword,
    status: req.body.status
  }
  db.query(sql, data, function (err, result) {
    if (err) throw err
    res.status(201).json({
      status:'sukses',
      message: 'data berhasil dimasukan!',
      result: result
    })
  })
}

exports.getUserId = (req, res) => {
  var sql = 'SELECT * FROM user WHERE id =?'
  var id = req.params.id
  db.query(sql, id, function (err, result) {
    if (err) throw err
    res.json(result)
  })
}

exports.changePasswordId = async (req, res) => {
  var sql = 'UPDATE user SET ? WHERE id = ?'
  var id = req.params.id
  const password = req.body.password
  const encryptedPassword = await bcrypt.hash(password, saltRound)
  var data = {
    password: encryptedPassword,
  }
  db.query(sql, [data, id], function (err, result) {
    if (err) throw err
    res.status(201).json({
      status:'sukses',
      message: 'password berhasil diganti!',
      result: result
    })
  })
}

exports.checkLogin =  (req, res) => {
  var id = req.params.id
  var username = req.body.username
  var password = req.body.password
  
  var sql = 'SELECT * FROM user WHERE id = ? '

  console.log(id, username, password);
  db.query(sql, id, async function (err, result) {
    if (err) {throw err}
    else if (result.length > 0) {
      const comparison = await bcrypt.compare(password, result[0].password)
      if (comparison && username == result[0].username) res.status(201).json({
        message: 'password cocok! bisa login!'
      })
      else res.status(400).json({
        message: 'password tidak cocok dengan username :('
      })
    }
  })
}

