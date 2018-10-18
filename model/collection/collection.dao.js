const MySQLClient  = require('../connection/MySQLClient');
class CollectionsDao extends MySQLClient{
  constructor(){
    super();
    this.db = this.getConnection();
    this.table = "collection";
  }

  getCollections(callback){
    this.db.query("Select * from "+this.table+" ",callback);
  }
  getCollectionsPage(page,callback){
    this.db.query("Select * from "+this.table+" limit "+page+", 10",callback);
  }
  getCollectionById(id, callback){
    this.db.query("select * from "+this.table+" where id_disks=? ",[id],callback);
  }
  getDiskByOrderId(callback){
    this.db.query("select * from "+this.table+" order by id_disks desc ",callback);
  }
  getLastDisk(callback){
    this.db.query("select  max(id_disks) as id_disks from "+this.table,callback);
  }
  getTotalCollection(callback){
    this.db.query("select count(*) as total from "+this.table,callback);
  }
  addCollection(Disk,callback){
      let idCollection = null
          db.query("Insert into "+this.table+" values(?,?,?,?)",
          [idCollection,Collection.name,Collection.created, Collection.updated],
          callback);
  }
  deleteCollection(id,callback){
   this.db.query("delete from  "+this.table+" where id_collection=?",[id],callback);
  }
  updateCollection(Collection,callback){
   this.db.query("update  "+this.table+" set name_collection=? , updated_at=? where id_collection=?",
   [Collection.name, Collection.updated, Collection.id],
   callback);
  }
}
module.exports = CollectionsDao;
