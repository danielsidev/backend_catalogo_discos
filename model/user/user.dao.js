const MySQLClient  = require('../connection/MySQLClient');
const md5 = require('md5');

class UserDao extends MySQLClient{
  constructor(){
    super();
    this.db    = this.getConnection();
    this.table = "users";
  }
  getAllUsers(callback){
    this.db.query("Select * from "+this.table,callback);
  }
  getUserById(id, callback){
    this.db.query("select * from "+this.table+" where iduser=? ",[id],callback);
  }
  getUserByOrderId(callback){
    this.db.query("select * from "+this.table+" order by iduser desc ",callback);
  }
  getLastUser(callback){
    this.db.query("select  max(iduser) as iduser from "+this.table,callback);
  }
  getTotalUsers(callback){
    this.db.query("select count(*) as total from "+this.table,callback);
  }
  loginUser(User,callback){
    this.db.query("select * from "+this.table+"  where email=? and password=? ",[User.email,md5(User.senha)],callback);
  }
  addUser(User,callback){
    let password  = md5(User.password);
    let iduser = null;
          db.query("Insert into "+this.table+" values(?,?,?,?,?,?)",
          [iduser,User.name,User.email,password, User.created, User.updated],
          callback);
  }
  newPassword(User,callback){
   let senha= md5(User.senha);
   this.db.query("update  "+this.table+" set password=?   where iduser=?",[senha,User.id],callback);
  }
  deleteUser(id,callback){
   this.db.query("delete from  "+this.table+" where iduser=?",[id],callback);
  }
  updateUser(User,callback){
   this.db.query("update  "+this.table+" set name=? , email=?, state=?, dt_usu=?, hr_usu=?  where iduser=?",
   [User.nome, User.email, User.state, User.data, User.hora,User.id],
   callback);
  }
}
module.exports=UserDao;
