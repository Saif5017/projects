const express=require('express')

const router=express.Router();

const authController=require('../controllers/auth');

router.get('/reset', authController.getReset)

router.post('/reset', authController.postReset)

router.get('/reset/:token', authController.getNewPassword)

router.post('/new-password', authController.postNewPassword)

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignUp)

router.post('/login', authController.postLogin);

router.post('/signup',   authController.postSignUp)

router.post('/logout', authController.postLogout);

module.exports=router;
