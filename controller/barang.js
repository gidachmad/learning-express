const db = require('../config/database')

exports.getAllBarang = (req, res) => {
  var sql = 'SELECT * FROM barang2'
  db.query(sql, function (err, result) {
    if (err) throw err
    res.json(result)
  })
}

exports.getAllBarangId = (req, res) => {
  var sql = 'SELECT * FROM barang2 where id = ?'
  var id = req.params.id
  db.query(sql, id, function (err, result) {
    if (err) throw err
    res.json(result)
  })
}

exports.createNewBarang = (req, res) => {
  var sql = 'INSERT INTO barang2 SET ?'
  var data = {
    kategori : req.body.kategori,
    kodeRak : req.body.kodeRak,
    kodeBarang : req.body.kodeBarang,
    namaBarang: req.body.namaBarang,
    satuan : req.body.satuan,
    jumlahBarang : req.body.jumlahBarang,
    harga: req.body.harga,
    tanggalKadaluarsa: req.body.tanggalKadaluarsa,
    tanggalTerima: req.body.tanggalTerima,
    sumber: req.body.sumber,
    tahunAnggaran: req.body.tahunAnggaran,
    tanggalInput: req.body.tanggalInput,
    arusBarang: req.body.arusBarang,
    status: req.body.status,
  }
  // console.log(data);
  db.query(sql, data, function (err, result) {
    if (err) throw err
    // res.json(result)
    res.status(201).json({
      status:'sukses',
      message: 'data berhasil dimasukan!',
      result: result
    })
  })
}

exports.updateBarangId = (req, res) => {
  var id = req.params.id
  var sql = 'UPDATE barang2 SET ? where id = ? '
  var data = {
    kategori : req.body.kategori,
    kodeRak : req.body.kodeRak,
    kodeBarang : req.body.kodeBarang,
    namaBarang: req.body.namaBarang,
    satuan : req.body.satuan,
    jumlahBarang : req.body.jumlahBarang,
    harga: req.body.harga,
    tanggalKadaluarsa: req.body.tanggalKadaluarsa,
    tanggalTerima: req.body.tanggalTerima,
    sumber: req.body.sumber,
    tahunAnggaran: req.body.tahunAnggaran,
    tanggalInput: req.body.tanggalInput,
    arusBarang: req.body.arusBarang,
    status: req.body.status,
  }
  // console.log(data);
  db.query(sql, [data, id], function (err, result) {
    if (err) throw err
    // res.json(result)
    res.status(201).json({
      status:'sukses',
      message: 'data berhasil diedit!',
      result: result
    })
  })
}