
let UserDao = require('../../model/user/user.dao');
let TokenController = require('../token/token.controller');
const Token = new TokenController(); 
class UserController extends UserDao{
    constructor(){
        super();
    }
    checkToken(token, res){
        Token.checkToken(token,function(resposta, msg){
            let retorno = {"success":resposta, "erro":null, "message":msg};
            console.log(JSON.stringify(retorno));
            if(retorno.success){
                res.status(200).json( { response:200, body:"Token valid!" } );
            }else{
                res.status(400).json( { response:400, body:"Token invalid or expired!" } );
            }
        });
      }

      verifyToken(token, callback){
        Token.checkToken(token,function(resposta, msg){
            let retorno = {"success":resposta, "erro":null, "message":msg};
            console.log(JSON.stringify(retorno));
            callback(retorno.success);
            
        });
      }
    login(login,res){
      let Login={"email":login.email,"senha":login.password};
      this.loginUser(Login,function(err,rows){
        if(rows.length>0){ 
         let codeSession = rows[0].id_user+"_"+rows[0].name+"_"+rows[0].email;
           Token.createToken(codeSession,res);
         }else{
           res.status(401).json( { response:401, body:"User or password invalid!" } );
         }
      });
    }

    logout(dados, res){
      Token.addTokenBlackList(dados,function(err,resposta){
        
         (err)?res.status(401).json( { response:401, body:"User or password invalid!" } ):
         res.status(200).json( { response:200, body:"Logout Success!" } );
      });
    }
    getUsers(res){
        this.getAllUsers((err,rows) =>{
            if(err){
              res.status(400).json({"response":400, "error":err, "body":null});
            }else{
              res.status(200).json({"response":200, "error":null, "body":rows});
            }
         });

    }
    addOneUser(User,res){
        if(User.email!="" && User.password!==""){
            this.addUser(User, (err) => {
                if(err){
                    res.status(400).json({"response":400, "message":"User not added","error":err, "body":""});
                  }else{
                    res.status(200).json({"response":200, "erro":null, "message":"User added with success!", "body":""});
                  }
            });
        }else{
            res.status(401).json({"response":401, "message":"User not exist","error":err, "body":""});
        }
    
    //   this.Token.checkToken(token,function(resposta, msg){
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
 module.exports=UserController;
