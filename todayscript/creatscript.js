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
                str += 'exports.PID' + docs[i].pid + '_info = {' +'\n';
                str += 'pid:'+docs[i].pid + '\n';
                str += ','+'cid:'+docs[i].cid + '\n';
                str += ','+'title:\''+docs[i].title +'\'\n';
                str += ','+'volume:'+docs[i].volume+'\n';
                str +=','+'recentvolume:'+docs[i].recentvolume+'\n';
                str += ','+'org_price:'+docs[i].org_price+'\n';
                str +=','+'price:'+docs[i].price*1.2+'\n';
                str += ','+'state:'+docs[i].state + '\n';
                str += ','+'stamper:'+'\'\'' + '\n';
                str += ','+'pic_url:\''+docs[i].pic_url+'\'\n';
                str += ','+'time:'+docs[i].time + '\n';
                str += ','+'gallery:\n';
                str += '[\n';

                if(docs[i].gallery.length > 1){
                    str +='\''+docs[i].gallery[0]+'\''+'\n';

                    for(var j = 1; j < docs[i].gallery.length - 1;++j){
                        str += ','+'\''+docs[i].gallery[j] + '\'' + '\n';
                    }

                    str += ',null'+'\n';
                }
                else{
                    str += 'null' +'\n';
                }

                str += ']\n';
                str += ',detailpics:\n' +'[\n'+',null\n'+']\n'+'}\n';

                str += '\n';

            }

            console.log(str);
        });
    });
};

function writetofile(str){
        fs.writeFile('macro_cid1_pid1_20.js',str,function(e){
            if(e) throw e;
        });
}

start();