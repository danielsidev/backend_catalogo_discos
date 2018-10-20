let express = require('express');
let router  = express();
let DiskController    = require('../controller/disk/disk.controller');
let UserController    = require('../controller/user/user.controller');

router.get('/:id_disk',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let id_disk          = req.params.id_disk;
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.getDisksCollectionById(id_disk, res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});

router.get('/page/:page',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let page = req.params.page;
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.getDisks(page,res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});

router.get('/collection/all',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.getDisksCollection( res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});

router.get('/search/keyword/:keyword',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let keyword = req.params.keyword;
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.getDisksByKeyword(keyword, res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});



router.get('/collection/all/:id_collection',function(req,res,next){
    let token = req.headers['x-access-token'];
    console.log("token: "+token);
    let id_collection = req.params.id_collection;
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.getDisksByCollection(id_collection, res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});


router.post('/add',function(req,res,next){
    let token = req.body.token;//req.headers['x-access-token'];
    console.log("token: "+token);
   let DiskBody = req.body;
   let Disk = new DiskController();
   Disk.Token.checkToken(token,function(resposta, msg){
      let retorno = {"success":resposta, "erro":null, "message":msg};
      console.log(JSON.stringify(retorno));
      if(resposta){
       Disk.addNewDisk(DiskBody, res);
      }else{
           res.status(401).json({response:401,message:"Token invalid or expired!" });
      }
  });
});

router.put('/update',function(req,res,next){
    let token = req.body.token; //req.headers['x-access-token'];
    console.log("token: "+token);
    let DiskBody = req.body;
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.updateOneDisk(DiskBody, res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});

router.delete('/delete/:id',function(req,res,next){
    let token = req.headers['x-access-token'];
    let id = parseInt(req.params.id);
    let Disk = new DiskController();
    Disk.Token.checkToken(token,function(resposta, msg){
       let retorno = {"success":resposta, "erro":null, "message":msg};
       console.log(JSON.stringify(retorno));
       if(resposta){
        Disk.deleteOneDisk(id,res);
       }else{
            res.status(401).json({response:401,message:"Token invalid or expired!" });
       }
   });
});

//VERIFICA SE O TOKEN E VALIDO
router.get('/token',function(req,res,next){
    let token = req.headers['x-access-token'];
    new UserController().checkToken(token, res);
   });

 module.exports=router;