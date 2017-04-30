var bookshelf = require('./../bookshelf');
var Photo = require('./photo');

var Format = bookshelf.Model.extend({
  tableName: 'formats',
  photos: function() {
    return this.hasMany(Photo);
  }
});

module.exports = Format;