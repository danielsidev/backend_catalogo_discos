const MySQLClient  = require('../connection/MySQLClient');
class DisksDao extends MySQLClient{
  constructor(){
    super();
    this.db    = this.getConnection();
    this.table = "disks";
  }
  getDiskPage(page,callback){
    let pg = page+", 10";
    this.db.query("Select * from "+this.table+" order by id_disks desc limit ?",[pg],callback);
  }
  getDiskById(id, callback){
    this.db.query("select * from "+this.table+" where id_disks=? ",[id],callback);
  }
  getDiskByIdCollection(id_collection, page, callback){
    this.db.query("select * from "+this.table+" where id_collection=?  limit ",[id_collection, page+', 10'],callback);
  }

  getDiskCollectionAllById( id_disk, callback){
    this.db.query("select c.id_collection as 'id_collection', c.name_collection as 'collection', d.title as 'disk', d.year_publication as 'year' from "+this.table+" as d inner join collection as c  on d.id_collection=c.id_collection where d.id_disks=?  order by id_disks desc",[id_disk],callback);
  }
  getDiskByCollectionAll(  callback){
    this.db.query("select d.id_disks as 'id_disks', c.name_collection as 'collection', d.title as 'disk', d.year_publication as 'year' from "+this.table+" as d inner join collection as c  on d.id_collection=c.id_collection order by id_disks desc ",callback);
  }

  getDiskByIdCollectionAll(id_collection, callback){
    this.db.query("select d.id_disks as 'id_disks',c.id_collection as 'id_collection', c.name_collection as 'collection', d.title as 'disk', d.year_publication as 'year' from "+ this.table+" as d inner join collection as c  on d.id_collection=c.id_collection where d.id_collection=?  order by id_disks desc",[id_collection],callback);
  }
  getDiskByKeywordAll(keyword, callback){
    this.db.query("select d.id_disks as 'id_disks',c.name_collection as 'collection', d.title as 'disk', d.year_publication as 'year' from "+this.table+" as d inner join collection as c  on d.id_collection=c.id_collection where d.title LIKE ? ",[keyword+'%'],callback);
  }
  getDiskByOrderId(callback){
    this.db.query("select * from "+this.table+" order by id_disks desc ",callback);
  }
  getLastIdDisk(callback){
    this.db.query("select  max(id_disks) as last_id_disks from "+this.table,callback);
  }
  getTotalDisks(callback){
    this.db.query("select count(*) as total from "+this.table,callback);
  }
  addDisk(Disk,callback){
      let id_disks = null
          this.db.query("Insert into "+this.table+" values(?,?,?,?,?,?)",
          [id_disks, Disk.id_collection, Disk.title, Disk.year ,Disk.created, Disk.updated],
          callback);
  }
  deleteDisk(id,callback){
   this.db.query("delete from  "+this.table+" where id_disks=?",[id],callback);
  }
  updateDisk(Disk,callback){
   this.db.query("update  "+this.table+" set id_collection=?, title=? , year_publication=? ,updated_at=? where id_disks=?",
   [Disk.id_collection, Disk.title, Disk.year, Disk.updated, Disk.id_disks],
   callback);
  }
}
module.exports = DisksDao;
