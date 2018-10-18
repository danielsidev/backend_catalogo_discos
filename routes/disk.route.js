let express = require('express');
let router  = express();
let DiskController    = require('../controller/disk/disk.controller');
let UserController    = require('../controller/user/user.controller');

router.get('/:id_disk',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let id_disk          = req.params.id_disk;
    new DiskController().getDisksCollectionById(id_disk, res);
});

router.get('/page/:page',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let page = req.params.page;
    new DiskController().getDisks(page,res);
});

router.get('/collection/all',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    new DiskController().getDisksCollection( res);
});

router.get('/search/keyword/:keyword',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let keyword = req.params.keyword;
    new DiskController().getDisksByKeyword(keyword, res);
});



router.get('/collection/all/:id_collection',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let id_collection = req.params.id_collection;
    new DiskController().getDisksByCollection(id_collection, res);
});


router.post('/add',function(req,res,next){
    let token = req.body.token;//req.headers['x-access-token'];
    console.log("token: "+token);
   let Disk = req.body;
   new DiskController().addNewDisk(Disk, res);
});

router.put('/update',function(req,res,next){
    let token = req.body.token; //req.headers['x-access-token'];
    console.log("token: "+token);
    let Disk = req.body;
    new DiskController().updateOneDisk(Disk, res);
});

router.delete('/delete/:id',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let id = parseInt(req.params.id);
    console.log("token: "+token+" === id: "+id);
    new DiskController().deleteOneDisk(id,res);
});

//VERIFICA SE O TOKEN E VALIDO
router.get('/token',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    new UserController().checkToken(token, res);
   });

 module.exports=router;