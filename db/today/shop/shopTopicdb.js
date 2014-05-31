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
            {pid:25,pic_url:'http://pic.yupoo.com/yige2002/DNlL8kID/HAont.jpg'}
            ,{pid:49,pic_url:'http://pic.yupoo.com/yige2002/DNlMhxkn/1485rg.jpg'}
            ,{pid:78,pic_url:'http://pic.yupoo.com/yige2002/DNlMWJeY/kCaW9.jpg'}
            ,{pid:2,pic_url:'http://pic.yupoo.com/yige2002/DNlKcSaF/11MNk7.jpg'}
            ,{pid:84,pic_url:'http://pic.yupoo.com/yige2002/DNlUCOon/XeNIj.jpg'}
            ,null
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
            {pid:753,pic_url:'http://pic.yupoo.com/yige2002/DNrkW15S/z6VcE.jpg'}
            ,{pid:752,pic_url:'http://pic.yupoo.com/yige2002/DNrjIGgi/vMWra.jpg'}
            ,{pid:751,pic_url:'http://pic.yupoo.com/yige2002/DNriZ9GD/9ebIv.jpg'}
            ,{pid:89,pic_url:'http://pic.yupoo.com/yige2002/DNqwOxWu/b36HX.jpg'}
            ,{pid:90,pic_url:'http://pic.yupoo.com/yige2002/DNqxcFrz/tIPa3.jpg'}
            ,null
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
            {pid:22,pic_url:'http://pic.yupoo.com/yige2002/DNrpGred/c1JSp.jpg'}
            ,{pid:82,pic_url:'http://pic.yupoo.com/yige2002/DNrqw0Dg/12CWkn.jpg'}
            ,{pid:61,pic_url:'http://pic.yupoo.com/yige2002/DNrq76Cq/cuJtx.jpg'}
            ,{pid:105,pic_url:'http://pic.yupoo.com/yige2002/DNrrigN8/6n6OI.jpg'}
            ,{pid:107,pic_url:'http://pic.yupoo.com/yige2002/DNrs2Lci/TSA81.jpg'}
            ,null
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
            {pid:66,pic_url:'http://pic.yupoo.com/yige2002/DNrzi6J8/DWy0.jpg'}
            ,{pid:65,pic_url:'http://pic.yupoo.com/yige2002/DNryNX09/4TBpm.jpg'}
            ,{pid:80,pic_url:'http://pic.yupoo.com/yige2002/DNrC77fG/EwkTR.jpg'}
            ,{pid:75,pic_url:'http://pic.yupoo.com/yige2002/DNrBMBVC/bXxL2.jpg'}
            ,{pid:72,pic_url:'http://pic.yupoo.com/yige2002/DNrBo6OL/7Bns2.jpg'}
            ,null
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