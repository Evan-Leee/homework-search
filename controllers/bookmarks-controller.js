'use strict';
var bookmarks = require('../seeds/data.json');

function BookmarksController() {

}

BookmarksController.prototype.getBookmark = function (req, res) {
  res.send(bookmarks);
};

BookmarksController.prototype.add = function (req, res) {
  bookmarks.push({
    title: req.param('bookmark'),
    created: "1387243195",
    address: req.param('address')
  });
  res.send(bookmarks);
};

BookmarksController.prototype.delete = function (req, res) {
  var index;
  console.log(req.param('title'))
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks.title === req.param('title')) {
      index = i;
      break;
    }
  }
  console.log(bookmarks.splice(index, 1));
  res.send(bookmarks);
};


module.exports = BookmarksController;