var express = require("express");
	router = express.Router();
	knex = require("../db/knex")

// **************CREATE******************
router.route("/")
	.get(function(req,res){
	  knex('users').then(function(result,err){
	    res.render('users/index',{users:result});
		});
	})
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



// **************READ******************
router.route("/new")
	.get(function(req, res){
		knex('users').then(function(result,err){
		res.render("users/new");
		});
	});

router.route("/:id")
	.get(function(req,res){
      var userId = req.params.id;
	  knex('users').where('id', userId).first().then(function(result,err){
	    res.render('users/index',{users:result});
		});
	});

router.route('/:id/posts')
    .get(function(req,res){
      var userId = req.params.id;
      var userPosts = req.body;
      knex('users').where('id', userId).first().then(function(result,err){
        res.render('users/show',{users:result});
        });
    });

// **************UPDATE******************
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


// **************DELETE******************
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



    // +//author show page (READ)
    //  +router.get('/:id', function (req, res){
    //  +    // get id from params
    //  +    var authorId = req.params.id;
    //  +
    //  +    // query db for author id
    //  +    // .first gets the first result in the array
    //  +    knex('authors').where('id', authorId).first().then(function(result, err){
    //  +        var author = result;
    //  +        //key author and value author (i.e., the result)
    //  +        res.render('authors/show', {author: author});
    //  +    })
    //  +    // render show author page
    //  +});





module.exports = router;
