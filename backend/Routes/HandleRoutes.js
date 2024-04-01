const express = require('express');

const router = express.Router();

//Routes
const { Users, sendUser, deleteUser } = require('../Controllers/users.js')


//get user
router.get('/users', Users);

router.post('/users', sendUser);


module.exports = router;
