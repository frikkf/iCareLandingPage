var mongoose = require('mongoose');
/*
  Instantiate DATABASE
 */


module.exports = {
    connect: function() {
        mongoose.connect('mongodb://frikk:FbpB0468@cluster0-shard-00-00-b6kiv.mongodb.net:27017,cluster0-shard-00-01-b6kiv.mongodb.net:27017,cluster0-shard-00-02-b6kiv.mongodb.net:27017/Cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
    }
}



