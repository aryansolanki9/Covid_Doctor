const express = require('express');
const router = express.Router();
const Post = require('../../models/doctor');

router.get('/', (req, res, next )=> {
    Post.find()
        .then((posts1)=> {
            res.json(posts1);
        })
        .catch(err => console.log(err))
});
//To create
router.post('/add', (req,res,next) =>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const doctorID = req.body.doctorID;
    const specialisation = req.body.specialisation;
    const docAddress = req.body.docAddress;
    
    newPost = new Post ({
        firstName : firstName ,
        lastName : lastName,
        doctorID : doctorID,
        specialisation : specialisation ,
        docAddress : docAddress
    });
    newPost.save()
        .then(post =>{
            res.json(post);
        })
        .catch(err=> console.log(err));
});


//To put
router.put('/update/:id', (req,res,next) =>{
    //Grabe the id of post

    let id = req.params.id;
    
    //find post by id
    Post.findById(id)
        .then (post1 =>{
            post1.title = req.body.title;
            post1.body = req.body.body;
            post1.save()
            .then(post1 =>{
                res.send({
                    message: 'Post updated successfully',
                    status: 'success',
                    post1 : post1 
                })
            })
            .catch(err=> console.log(err));
        }).catch(err=> console.log(err));
    });

module.exports = router;
