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
            ,picarr             :[String]
        });

        mongoose.model('todayProductPicDetail',proSchema);

        var todayCategory = mongoose.model('todayProductPicDetail');
        var pidnum = 601;
        todayCategory.findOne({pid:pidnum},function(err,doc){
            if(doc){
                var str = '';

                str += 'exports.PID'+pidnum+'_DETAIL = [\n';

                if(doc.picarr.length > 1){
                    str +='\''+doc.picarr[0]+'\''+'\n';

                    for(var j = 1; j < doc.picarr.length - 1;++j){
                        str += ','+'\''+doc.picarr[j] + '\'' + '\n';
                    }

                    str += ',null' +'\n' + '];' +'\n';
                }
                else{
                    str += 'null' +'\n' + '];' +'\n';
                }

                console.log(str);
            }
        });
    });
};

function writetofile(str){
    fs.writeFile('readdetail.txt',str,function(e){
        if(e) throw e;
    });
}

start();