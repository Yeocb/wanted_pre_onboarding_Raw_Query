const express = require('express');
const router = express.Router();
const postRouter = require('./postRouter');

router.use('/jobpost', postRouter.router);

module.exports = router;