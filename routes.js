module.exports = function(app){
	var SerieTV = require('./serietv');
	//GET
	findAllSerieTV = function(req, res){
		SerieTV.find(function(err, seriestv){
			if(!err) res.send(seriestv);
			else console.log('ERROR: '+err);
		});
	};
	// GET
	findByID = function(req, res){
		SerieTV.findById(req.params.id, function(err, seriestv){
			if(!err) res.send(seriestv);
			else console.log('ERROR: '+err);
		});
	};
	//POST
	addSerieTV = function(req, res){
		console.log('POST');
		console.log(req.body);

		var serietv = new SerieTV({
			titulo: req.body.titulo,
			temporadas: req.body.temporadas,
			pais: req.body.pais,
			genero: req.body.genero
		});
		serietv.save(function(err){
			if(!err) console.log('SerieTV Guardada!');
			else console.log('ERROR: '+err);
		});
        res.send(serietv);
	};
	//PUT (UPDATE)
	updateSerieTV = function(req, res){
		SerieTV.findById(req.params.id, function(err, serietv){
			serietv.titulo = req.body.titulo;
			serietv.temporadas = req.body.temporadas;
			serietv.pais = req.body.pais;
			serietv.genero = req.body.genero;
            serietv.save(function(err){
                if(!err) console.log('SerieTV Actualizada!');
                else console.log('ERROR: '+err);
            });
        });
	};
	//DELETE
	deleteSerieTV = function(req, res){
		SerieTV.findById(req.params.id, function(err, serietv){
			serietv.remove(function(err){
				if(!err) console.log('SerieTV Borrada!');
				else console.log('ERROR: '+err);
			});
		});
	};
	app.get('/seriestv', findAllSerieTV);
	app.get('/seriestv/:id', findByID);
	app.post('/seriestv', addSerieTV);
	app.put('/seriestv/:id', updateSerieTV);
	app.delete('/seriestv/:id', deleteSerieTV);
};