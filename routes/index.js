var express = require('express');
var router = express.Router();
var contact = require('../models/contact');

/* GET All contact. */
router.get('/', function(req, res, next) {
  contact.find(function(err,data) {
  	if(err){
        console.log(err);
    }else {
        res.render('show', { users: data })
    }
  })
});
/*
// Get 1 contact to show details
router.get('/:id', function(req,res,next){
     contact.findById(req.params.id, function(err,data) {
    if(err){
        console.log(err);
    }else {
        res.render('detail', { user: data })
    }
  })
})

//GET Form add new contact
router.get('/add/contact', function(req,res,next){
    res.render('add');
});

//HTTP post new contact
router.post('/', function (req, res, next) {
	  const obj = JSON.parse(JSON.stringify(req.body));
       
    new contact({ FullName: obj.fullname ,
    			  Phone: obj.phone})
        .save(function (err, doc) {
            res.redirect("/");
        })
});

// GET contact to delete
router.get('/delete/:id', function (req, res, next) {
    contact.findByIdAndRemove(req.params.id, 
    	function (err, docs) {
        if (err)
            console.log(err);
        res.redirect('/');
    })
});
// post action to edit contact
router.post('/edit/:id', function (req, res, next) {


    contact.findById({ _id: req.params.id },
     function (err, data) {
        if (err)
            console.log(err);

        data.FullName = req.body.fn;
        data.save(function (err, todo) {
            if (err) {
                res.status(500).send(err)
            }
            res.send('updated');
        });

    })
 });

// Get for update
// Get 1 contact
router.get('/edit/contact/:id', function(req,res,next){
     contact.findById(req.params.id, function(err,data) {
    if(err){
        console.log(err);
    }else {
        res.render('editContact', { user: data })
    }
  })
})
// Update contact
router.post('/edit/contact/:id', function(req,res,next){
        
        const obj = JSON.parse(JSON.stringify(req.body));
        console.log(obj);
    const myNewContact = {
        FullName:obj.fullname,
        Phone: obj.phone
    }
    contact.findByIdAndUpdate(req.params.id, myNewContact, function(err){
        if(err){
            res.redirect('/edit/contact/'+req.params.id);
        }else{
            res.redirect('/');
        }
    })
})*/
module.exports = router;
