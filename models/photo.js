var bookshelf = require('./../bookshelf');
var Artist = require('./artist');
var Format = require('./format')

var Photo = bookshelf.Model.extend({
  tableName: 'photos',
  artist: function() {
    return this.belongsTo(Artist);
  },
  // Throws a stack overflow error for some reason so comment it out to make shot work
  // format: function() {
  // 	return this.belongsTo(Format);
  // }
});

module.exports = Photo;