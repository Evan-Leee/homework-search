var express = require('express');
var router = express.Router();
var BookmarksController = require('../../controllers/bookmarks-controller');
var bookmarksController = new BookmarksController();

router.get('/', bookmarksController.getBookmark);



module.exports = router;