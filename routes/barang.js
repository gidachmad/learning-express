const express = require('express')
const { getAllBarang, createNewBarang, updateBarangId, getAllBarangId } = require('../controller/barang')
const router = express.Router()


router.route('/')
.get(getAllBarang)
.post(createNewBarang)


router.route('/:id')
.get(getAllBarangId)
.put(updateBarangId)

module.exports = router