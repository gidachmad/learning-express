const express = require('express')
const { getUser, createNewUser, getUserId, changePasswordId, checkLogin } = require('../controller/user')
const router = express.Router()

router.route('/')
.get(getUser)
.post(createNewUser)

router.route('/:id')
.get(getUserId)
.put(changePasswordId)

router.route('/login/:id')
.get(checkLogin)

module.exports = router