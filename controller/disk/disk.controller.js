
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
          this.getDiskByKeywordAll(keyword,(err,rows) =>{
            this.closeConnection();
            console.log("result: "+JSON.stringify(rows));
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
                if(rows.length >0){
                    res.status(200).json({"response":200, "error":null, "body":rows});
                }else{
                    res.status(200).json({"response":200, "message":"We Not Found Disks with this keyword","error":null, "body":rows});
                }
              
            }
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
    // getUserById(token,id, res){
    //     Token.checkToken(token,function(resposta, msg){
    //       if(resposta){
    //         User.getUserById(id,function(err,rows){
    //           if(err){
    //             res.json({"success":false,"erro":err, "message":"Não foi possível encontrar o usuário!", "dados":null});
    //           }else{
    //             res.json({"success":true, "erro":null, "dados":rows});
    //           }
    //         });
    //       }else{
    //         res.json({"success":false, "erro":null, "message":msg});
    //       }
    //     });
    // }
    // updateUser(token, user, res){
    //   Token.checkToken(token,function(resposta, msg){
    //     if(resposta){
    //       User.updateUser(user,function(err,rows){
    //         if(err){
    //           res.json({"success":false,"erro":err, "message":"Não foi possível atualizar o usuário!", "dados":null});
    //         }else{
    //           res.json({"success":true, "erro":null,"message":"Usuário atualizado com sucesso!", "dados":null});
    //         }
    //       });
    //     }else{
    //       res.json({"success":false, "erro":null, "message":msg});
    //     }
    //   });
    // }
    // updatePassword(token, user, res){
    //   Token.checkToken(token,function(resposta, msg){
    //     if(resposta){
    //       User.newPassword(user,function(err,rows){
    //         if(err){
    //           res.json({"success":false,"erro":err, "message":"Não foi possível atualizar a senha!", "dados":null});
    //         }else{
    //           res.json({"success":true, "erro":null,"message":"Senha atualizada com sucesso!", "dados":null});
    //         }
    //       });
    //     }else{
    //       res.json({"success":false, "erro":null, "message":msg});
    //     }
    //   });
    // }
    // deleteUser(token,id, res){
    //   Token.checkToken(token,function(resposta, msg){
    //     if(resposta){
    //       let iduser = parseInt(id);
    //       User.deleteUser(iduser, function(err,count){
    //         if(err){
    //           res.json({"success":false,"erro":err, "message":"Não foi possível excluir o usuário!", "dados":null});
    //         }else{
    //           res.json({"success":true, "erro":null,"message":"Usuário excluído com sucesso!", "dados":null});
    //         }
    //       });
    //     }else{
    //       res.json({"success":false, "erro":null, "message":msg});
    //     }
    //   });
    // }
    // logout(dados, res){
    //   Token.addTokenBlackList(dados,function(err,resposta){
    //      (err)?res.json({"success":false,"message":"Erro: "+err,"token":dados.token}):res.json({"success":true,"message":"Logout efetuado com sucesso!","token":dados.token});
    //   });
    // }
 }
 module.exports=DiskController;
