var express = require("express");
	router = express.Router();
	knex = require("../db/knex")

    // POSTS schema
    // table.increments().primary();
    // table.string("title");
    // table.text("post", "longtext");
    // table.integer('user_id').unsigned().index().references('users.id');

// var userName = knex('users')
//   .join('posts', 'users.id', '=', 'posts.user_id')
//   .select('posts.post', 'users.username');
//   console.log(userName);

router.route("/")
	.get(function(req,res){
	  knex('posts').then(function(result,err){
	    res.render('posts/index',{posts:result});
		});
	});

    //user from posts show page (READ)

//     // //******************CREATE**********************//
// 	.post(function(req, res){
// 		var user = req.body;
// 		knex("posts").insert({
// 			full_name: user.full_name,
// 			username: user.username,
// 			img_url: user.img_url
// 		},'id').then(function(result, err){
// 			res.redirect('/posts');
// 		});
// 	});
//
//
//
//
// router.route("/new")
// 	.get(function(req, res){
// 		knex('posts').then(function(result,err){
// 		res.render("posts/new");
// 		});
// 	});
//
//
//
// router.route("/:id/edit")
//     .get(function(req, res){
//         var userId = req.params.id;
//         knex('posts').where('id', userId).first().then(function(result,err){
//         res.render("posts/edit", {user: result});
//         });
//     });
//
// router.route('/:id')
//     .put(function(req, res){
//         var userId = req.params.id;
//         var user = req.body;
//         knex('posts').where('id', userId).update({
//             full_name: user.full_name,
//             username: user.username,
//             img_url: user.img_url
//         }).then(function(result){
//             res.redirect('/posts');
//         })
//     });
//
// router.route("/:id/delete")
//     .get(function(req, res){
//         var userId = req.params.id;
//         knex('posts').where('id', userId).first().then(function(result,err){
//         res.render("posts/delete", {user: result});
//         });
//     });
//
// router.route('/:id')
//     .delete(function(req, res){
//         var userId = req.params.id;
//         knex('posts').where('id', userId).first().delete().then(function(result){
//             res.redirect('/posts');
//         })
//     });
//
//
//




module.exports = router;
