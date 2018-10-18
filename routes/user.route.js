let express = require('express');
let router  = express();
let UserController    = require('../controller/user/user.controller');
let moment = require("moment");
// FAZER LOGIN
// router.post('/login',function(req,res,next){
//   User.login(req.body,req,res);
//  });

/* RETORNA TODOS OS USUÃRIOS */
// router.get('/all',function(req,res,next){
// //  let token = req.headers['x-access-token'];
// //   (token)?User.getAllUsers(token, res):res.json({"success":false, "erro":null, "message":"Token inexistente!"});
// User.findAll(res);
// });

router.get('/all',function(req,res,next){
  let token = req.headers['x-access-token'];
    console.log("token: "+token);
    new UserController().getUsers(res);
    });

router.post('/add',function(req,res,next){
  let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let User = req.body;
    new UserController().addOneUser(User, res);
 });

 router.post('/login',function(req,res,next){
    let Login = req.body;
    console.log("BODY: "+JSON.stringify(Login));
    new UserController().login(Login, res);
 });

  // FAZER LOGOUT - Add Token in Blacklist
 router.post('/logout',function(req,res,next){
   let token = req.body.token;
   let dados = {
    "id"   :null,
    "token":token,
    "data" :moment().format('YYYY-MM-DD'),
    "hora" :moment().format('HH:mm:ss')
   };
   console.log("DADOS: "+JSON.stringify(dados));
   new UserController().logout(dados, res);
   
 });
 //VERIFICA SE O TOKEN E VALIDO
  router.get('/token',function(req,res,next){
   let token = req.headers['x-access-token'];
   console.log("token: "+token);
   new UserController().checkToken(token, res);
  });


 module.exports=router;