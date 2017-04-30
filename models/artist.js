var bookshelf = require('./../bookshelf');
var Photo = require('./photo');

var Artist = bookshelf.Model.extend({
  tableName: 'artists',
  photos: function() {
    return this.hasMany(Photo);
  }
});

module.exports = Artist;