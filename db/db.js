/**
 * Created by lishiming on 3/3/14.
 */
var mongoose = require('mongoose');
function start(){
    var mongodb = mongoose.connect('mongodb://localhost:27017');

    var db = mongodb.connection;

    db.on('error',console.error.bind(console,'connection erro:'));
    db.once('open',function callback(){
        console.log('db is open success!');

        var userSchema = new mongoose.Schema({
            mail:String
            ,ps :String
        });

        mongoose.model('user',userSchema);
    });
};

exports.start = start;