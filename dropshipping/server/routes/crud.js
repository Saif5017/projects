const express=require('express')
const bcrypt=require('bcryptjs');
const router=express.Router()

const Users=require('../middleware/middleware')
const Auth=require('../middleware/auth')

router.get('/', Users.getUsers);

router.get('/posts', Users.getPosts)

router.post('/post/:id', Users.postPosts)

router.post('/signup', Users.PostUsers);

router.get('/:id', Users.find, (req, res)=>{
    res.json(res.user);
    console.log(res.user)
})
//updating user info
router.patch('/:id', Users.find,Users.patchUser)

router.delete('/:id', Users.find,Users.deleteUser)

module.exports=router;