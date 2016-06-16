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



router.route("/:id/edit")
    .get(function(req, res){
        var userId = req.params.id;
        knex('users').where('id', userId).first().then(function(result,err){
        res.render("users/edit", {user: result});
        });
    });

router.route('/:id')
    .put(function(req, res){
        var userId = req.params.id;
        var user = req.body;
        knex('users').where('id', userId).update({
            full_name: user.full_name,
            username: user.username,
            img_url: user.img_url
        }).then(function(result){
            res.redirect('/users');
        })
    });

router.route("/:id/delete")
    .get(function(req, res){
        var userId = req.params.id;
        knex('users').where('id', userId).first().then(function(result,err){
        res.render("users/delete", {user: result});
        });
    });

router.route('/:id')
    .delete(function(req, res){
        var userId = req.params.id;
        knex('users').where('id', userId).first().delete().then(function(result){
            res.redirect('/users');
        })
    });







module.exports = router;
