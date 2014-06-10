/**
 * Created by lishiming on 14-6-10.
 */


var mongoose = require('mongoose');
var fs = require('fs');

function start(){



    var mongodb = mongoose.connect('mongodb://localhost:27017/todaylead');

    var db = mongodb.connection;

    db.on('error',console.error.bind(console,'connection erro:'));
    db.once('open',function callback(){
        console.log('db is open success!');
        var proSchema = new mongoose.Schema({
            pid                 :{
                type: Number,
                unique: true
            }
            ,cid                :Number
            ,title              :String
            ,volume             :Number
            ,recentvolume       :Number
            ,org_price          :Number
            ,price              :Number
            ,state              :Number
            ,stamper            :String
            ,pic_url            :String
            ,time               :Number
            ,gallery            :[String]
        });

        mongoose.model('todayProduct',proSchema);
        var todayCategory = mongoose.model('todayProduct');
        todayCategory.find({cid:1},{},{sort: {pid:'asc'}},function(err,docs){
           console.log(docs.length);

            var str = '';
            for(i in docs){
                var count = new Number(i) + 1;
                str += 'exports.PID' + count + '_URL = \'' + docs[i].pic_url +'\';' +'\n';
                str += '\n';

                for(var j = 0; j < docs[i].gallery.length - 1;++j){
                    str += 'exports.PID' + count + '_GALLERY_' + (j+1) + ' = \'' + docs[i].gallery[j] + '\';' + '\n';
                }
                str += '\n';

            }

            console.log(str);
            writetofile(str);
        });
    });
};

function writetofile(str){
        fs.writeFile('macro_cid1_pid1_20.js',str,function(e){
            if(e) throw e;
        });
}

start();