let express = require('express');
let router  = express();
let CollectionController  = require('../controller/collection/collection.controller');
let UserController        = require('../controller/user/user.controller');


router.get('/',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let page = req.params.page;
    new CollectionController().getAllCollections(res);
    });

router.get('/page/:page',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let page = req.params.page;
    new CollectionController().getAllCollectionsPage(page, res);
    });

//VERIFICA SE O TOKEN E VALIDO
router.get('/token',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    new UserController().checkToken(token, res);
   });

 module.exports=router;