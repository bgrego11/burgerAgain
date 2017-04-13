



// Requiring our models for syncing
var db = require("../models");







// Routes =============================================================


// Syncing our sequelize models and then starting our express app
db.sequelize.sync()

//==================================================
//Get route to pull the information for all colleges
//==================================================
module.exports = function(app) {

app.get("/api/burgers", function(req, res) {

	db.Burger.findAll().then(function(results){
		return res.json(results)
	})
})

app.get("/make/:id", function(req,res) {
	id = req.params.id
	
				db.Burger.update({
					devoured: 0
				}, {
					where: {
						id: id,
					}
				}).then(function(results){
					return res.json(results)
				});
				
			})

app.get("/eat/:id", function(req,res) {
	id = req.params.id
			db.Burger.update({
					devoured: 1
				}, {
					where: {
						id: id,
					}
				}).then(function(results){
					return res.json(results)
				})

})
			
		



app.post("/", function(req,res){
	
	db.Burger.create({
		burger_name : req.body.name,
		devoured: req.body.devoured
	}).then(function(data){
		return res.json({msg: "added"})
	})


})
}


