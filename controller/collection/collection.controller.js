
let CollectionDao = require('../../model/collection/collection.dao');
let TokenController = require('../token/token.controller');
class CollectionController extends CollectionDao{
    constructor(){
        super();
        this.Token = new TokenController(); 
    }
    // checkToken(token, res){
    //   Token.checkToken(token,function(resposta, msg){
    //       let retorno = {"success":resposta, "erro":null, "message":msg};
    //       console.log(JSON.stringify(retorno));
    //       res.json(retorno);
    //   });
    // }


    getAllCollectionsPage(page,res){
        new CollectionDao().getCollectionsPage(page,(err,rows) =>{
            this.closeConnection();
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });

    }

    getAllCollections(res){
        new CollectionDao().getCollections((err,rows) =>{
            this.closeConnection();
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });

    }
    // addUser(token,user,res){
    //   Token.checkToken(token,function(resposta, msg){
    //     if(resposta){
    //       User.addUser(user,function(err,rows){
    //         if(err){
    //           res.json({"success":false,"erro":err, "message":"Não foi possível adicionar usuário!"})
    //         }else{
    //           res.json({"success":true, "erro":null, "message":"Usuário criado com sucesso!"});
    //         }
    //       });
    //     }else{
    //       res.json({"success":false, "erro":null, "message":msg});
    //     }
    //   });
    // }
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
 module.exports=CollectionController;
