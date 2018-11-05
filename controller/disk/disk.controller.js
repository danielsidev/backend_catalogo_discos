
let DiskDao = require('../../model/disk/disk.dao');
let TokenController = require('../token/token.controller');

class DiskController extends DiskDao{
    constructor(){
        super();
        this.Token = new TokenController(); 
        
    }
    checkToken(token, res){
      this.Token.checkToken(token,function(resposta, msg){
          let retorno = {"success":resposta, "erro":null, "message":msg};
          console.log(JSON.stringify(retorno));
          res.json(retorno);
      });
    }
    getDisks(page,res){
        this.getDiskPage(page,(err,rows) =>{
            this.closeConnection();
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });

    }

    getDisksByCollection(id_collection, res){        
        this.getDiskByIdCollectionAll(id_collection,(err,rows) =>{
            this.closeConnection();
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });
    }

    getDisksCollectionById(id_disk, res){ 
        this.getDiskCollectionAllById( id_disk,(err,rows) =>{
            this.closeConnection();
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });
    }

    getDisksCollection( res){        
        this.getDiskByCollectionAll((err,rows) =>{
            this.closeConnection();
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });
    }

    getDisksByKeyword(keyword, res){ 
        return new Promise((resolve, reject) => {
            this.getDiskByKeywordAll(keyword,(err,rows) =>{
                this.closeConnection();
                console.log("result: "+JSON.stringify(rows));                
                (err)?reject(err):resolve(rows);
             });
        });       
         
    }
    addNewDisk(Disk,res){
        this.addDisk(Disk, (err) => {
            if(err){
                res.status(400).json({"response":400, "message":"Disk not added","error":err, "body":""});
              }else{
                res.status(200).json({"response":200, "erro":null, "message":"Disk added with success!", "body":""});
              }
        });
    }

    updateOneDisk(Disk,res){        
        this.updateDisk(Disk, (err) => {
            if(err){
                res.status(400).json({"response":400, "message":"Disk not updated","error":err, "body":""});
              }else{
                res.status(200).json({"response":200, "erro":null, "message":"Disk updated with success!", "body":""});
              }
        });
    }

    deleteOneDisk(id,res){                
        this.deleteDisk(id, (err) => {
            if(err){
                res.status(400).json({"response":400, "message":"Disk not deleted","error":err, "body":""});
              }else{
                res.status(200).json({"response":200, "erro":null, "message":"Disk deleted with success!", "body":""});
              }
        });
    }
    
 }
 module.exports=DiskController;
