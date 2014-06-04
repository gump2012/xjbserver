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
            {product_id:25,pic_url:'http://pic.yupoo.com/yige2002/DNlL8kID/HAont.jpg'}
            ,{product_id:49,pic_url:'http://pic.yupoo.com/yige2002/DNlMhxkn/1485rg.jpg'}
            ,{product_id:78,pic_url:'http://pic.yupoo.com/yige2002/DNlMWJeY/kCaW9.jpg'}
            ,{product_id:2,pic_url:'http://pic.yupoo.com/yige2002/DNlKcSaF/11MNk7.jpg'}
            ,{product_id:84,pic_url:'http://pic.yupoo.com/yige2002/DNlUCOon/XeNIj.jpg'}
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
            {product_id:753,pic_url:'http://pic.yupoo.com/yige2002/DNrkW15S/z6VcE.jpg'}
            ,{product_id:752,pic_url:'http://pic.yupoo.com/yige2002/DNrjIGgi/vMWra.jpg'}
            ,{product_id:751,pic_url:'http://pic.yupoo.com/yige2002/DNriZ9GD/9ebIv.jpg'}
            ,{product_id:89,pic_url:'http://pic.yupoo.com/yige2002/DNqwOxWu/b36HX.jpg'}
            ,{product_id:90,pic_url:'http://pic.yupoo.com/yige2002/DNqxcFrz/tIPa3.jpg'}
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
            {product_id:22,pic_url:'http://pic.yupoo.com/yige2002/DNrpGred/c1JSp.jpg'}
            ,{product_id:82,pic_url:'http://pic.yupoo.com/yige2002/DNrqw0Dg/12CWkn.jpg'}
            ,{product_id:61,pic_url:'http://pic.yupoo.com/yige2002/DNrq76Cq/cuJtx.jpg'}
            ,{product_id:105,pic_url:'http://pic.yupoo.com/yige2002/DNrrigN8/6n6OI.jpg'}
            ,{product_id:107,pic_url:'http://pic.yupoo.com/yige2002/DNrs2Lci/TSA81.jpg'}
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
            {product_id:66,pic_url:'http://pic.yupoo.com/yige2002/DNrzi6J8/DWy0.jpg'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/DNryNX09/4TBpm.jpg'}
            ,{product_id:80,pic_url:'http://pic.yupoo.com/yige2002/DNrC77fG/EwkTR.jpg'}
            ,{product_id:75,pic_url:'http://pic.yupoo.com/yige2002/DNrBMBVC/bXxL2.jpg'}
            ,{product_id:72,pic_url:'http://pic.yupoo.com/yige2002/DNrBo6OL/7Bns2.jpg'}
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