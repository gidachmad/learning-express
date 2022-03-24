const mysql = require('mysql')

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bnpb"
})

connection.connect(err => {
  if (err) throw err
  console.log('Database terkoneksi')
})

module.exports = connection