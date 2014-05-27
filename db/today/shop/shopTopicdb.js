/**
 * Created by gump on 4/21/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        topicid                    :{
            type: Number,
            unique: true
        }
        ,title                  :String
        ,pic_url                :String
        ,goods                  :[mongoose.Schema.Types.Mixed]
    });

    mongoose.model('todayshoptopic',userSchema);

    var todaytopic = mongoose.model('todayshoptopic');

    todaytopic.remove({}, function(err) {
    });

    var newtopic = new todaytopic({
        topicid:1
        ,pic_url:'http://pic.yupoo.com/yige2002/DJo6eot3/dUe3n.jpg'
        ,title:'TOP20疯抢宝贝'
        ,goods:[
            {pid:25,pic_url:'http://pic.yupoo.com/yige2002/DH3Agg4f/FK4Le.jpg'}
            ,{pid:49,pic_url:'http://pic.yupoo.com/yige2002/DH3Gnwct/qgUq0.jpg'}
            ,{pid:78,pic_url:'http://pic.yupoo.com/yige2002/DH3KNl6H/Ni57b.jpg'}
            ,{pid:2,pic_url:'http://pic.yupoo.com/yige2002/DH3pFFvk/p88pE.jpg'}
            ,{pid:84,pic_url:'http://pic.yupoo.com/yige2002/DH3SRatn/HeyFY.jpg'}
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newtopic = new todaytopic({
        topicid:2
        ,pic_url:'http://pic.yupoo.com/yige2002/DKdLXv7q/7Mpc5.jpg'
        ,title:'安全套餐'
        ,goods:[
            {pid:753,pic_url:'http://pic.yupoo.com/yige2002/DKSyikqU/kU9EL.jpg'}
            ,{pid:752,pic_url:'http://pic.yupoo.com/yige2002/DKPYuPZ6/jabj4.jpg'}
            ,{pid:751,pic_url:'http://pic.yupoo.com/yige2002/DKJgCRMd/VIVD8.jpg'}
            ,{pid:89,pic_url:'http://pic.yupoo.com/yige2002/DH3SQzmL/ONCp6.jpg'}
            ,{pid:90,pic_url:'http://pic.yupoo.com/yige2002/DH3SQGSG/ut3NW.jpg'}
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newtopic = new todaytopic({
        topicid:3
        ,pic_url:'http://pic.yupoo.com/yige2002/DKdMCckB/JsM68.jpg'
        ,title:'性福必备'
        ,goods:[
            {pid:22,pic_url:'http://pic.yupoo.com/yige2002/DH3ATW7B/qY5fr.jpg'}
            ,{pid:82,pic_url:'http://pic.yupoo.com/yige2002/DH3SQ96m/6GBis.jpg'}
            ,{pid:61,pic_url:'http://pic.yupoo.com/yige2002/DH3KMbU8/Ds3QD.jpg'}
            ,{pid:105,pic_url:'http://pic.yupoo.com/yige2002/DH3VOLlz/CgLSl.jpg'}
            ,{pid:107,pic_url:'http://pic.yupoo.com/yige2002/DH3VP45f/3M1Ls.jpg'}
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newtopic = new todaytopic({
        topicid:4
        ,pic_url:'http://pic.yupoo.com/yige2002/DJo4PeFr/FNA3t.jpg'
        ,title:'痴求欲女'
        ,goods:[
            {pid:66,pic_url:'http://pic.yupoo.com/yige2002/DH3KLB1e/1tbcq.gif'}
            ,{pid:65,pic_url:'http://pic.yupoo.com/yige2002/DH3KMEOv/sziBp.jpg'}
            ,{pid:80,pic_url:'http://pic.yupoo.com/yige2002/DH3KOoM7/jsxEM.jpg'}
            ,{pid:75,pic_url:'http://pic.yupoo.com/yige2002/DH3KMB4z/aX7Yt.jpg'}
            ,{pid:72,pic_url:'http://pic.yupoo.com/yige2002/DH3KNHvr/yGnbE.jpg'}
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;