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
        ,img_url:'http://xingjiabi.b0.upaiyun.com/images/shop/theme/532ff2f73c5cf.jpg'
        ,title:'100天'
        ,goods:[
            {pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
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
        ,img_url:'http://xingjiabi.b0.upaiyun.com/images/shop/theme/532ff2f73c5cf.jpg'
        ,title:'100天'
        ,goods:[
            {pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
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
        ,img_url:'http://xingjiabi.b0.upaiyun.com/images/shop/theme/532ff2f73c5cf.jpg'
        ,title:'100天'
        ,goods:[
            {pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
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
        ,img_url:'http://xingjiabi.b0.upaiyun.com/images/shop/theme/532ff2f73c5cf.jpg'
        ,title:'100天'
        ,goods:[
            {pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
            ,{pid:1,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'}
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