'use strict';
var bookmarks = require('../seeds/data.json');

function BookmarksController() {

}

BookmarksController.prototype.getBookmark = function (req, res) {
  res.send(bookmarks);
};

BookmarksController.prototype.add = function (req, res) {

};


module.exports = BookmarksController;