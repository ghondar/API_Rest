var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var serietv = new Schema({
	titulo:    { type: String },
	temporadas:     { type: Number },
	pais:  { type: String },
	genero:    { type: String, enum:
			['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
	}
});
module.exports = mongoose.model('SerieTV',serietv);