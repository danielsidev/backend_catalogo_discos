let express    = require('express');
let appRouter  = express();
let User       = require("./user.route");
let Collection = require("./collection.route");    
let Disk       = require("./disk.route"); 

appRouter.use('/user',User);
appRouter.use('/collection',Collection);
appRouter.use('/disk',Disk);

module.exports = appRouter;