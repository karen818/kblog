var express = require("express");
	router = express.Router();
	knex = require("../db/knex")

router.route("/")
	// Index
	// All the posts
	// .get()
	.get(function(req,res){
	  knex('users').then(function(result,err){
	    res.render('users/index',{users:result});
		});
	})
	// //******************CREATE**********************//
	.post(function(req, res){
		var user = req.body;
		knex("users").insert({
			full_name: user.full_name,
			username: user.username,
			img_url: user.img_url
		},'id').then(function(result, err){
			res.redirect('/users');
		});
	});



router.route("/new")
	.get(function(req, res){
		knex('users').then(function(result,err){
		res.render("users/new");
		});
	});



router.route("/edit")
	.post(function(req, res){
		var user = req.body;
		knex('users').update({
			name: user.full_name,
			username: user.username
		}).then(function(result, err){
			res.redirect('/users');
		})
	});

	// TABLE COLS
	// table.string("full_name");
	// table.string("username");
	// table.text("img_url", "longtext");



module.exports = router;
