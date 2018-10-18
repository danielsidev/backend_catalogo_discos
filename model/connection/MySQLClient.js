'use strict';

var Sequelize = require('sequelize');
var mysql=require('mysql');
class MySQLClient
{
	constructor()
	{
		this.connection = null;
		this.dbconfig = {
						"dev":{
								host:'localhost',
								user:'admDisk',
								password:'admDisk',
								database:'catalogo_discos'
								}
						,"prod":{
								host:'localhost',
								user:'admDisk',
								password:'admDisk',
								database:'catalogo_discos'
								}
						};
						switch(process.env.NODE_ENV){
							case 'dev':
								 this.connection = mysql.createPool(this.dbconfig.dev);
								 break;
							case 'prod':
								this.connection = mysql.createPool(this.dbconfig.prod);
								break;
							default:
								this.connection = mysql.createPool(this.dbconfig.prod);
								break;
						}				
		
	}

	getConnection()
	{
		return this.connection;
	}

	closeConnection()
	{
		this.connection.end();
	}
}

module.exports = MySQLClient;

