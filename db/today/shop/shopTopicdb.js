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
        ,pic_url:'http://pic.yupoo.com/yige2002/DKdLXv7q/7Mpc5.jpg'
        ,title:'安全套餐'
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
        ,pic_url:'http://pic.yupoo.com/yige2002/DKdMCckB/JsM68.jpg'
        ,title:'性福必备'
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
        ,pic_url:'http://pic.yupoo.com/yige2002/DJo4PeFr/FNA3t.jpg'
        ,title:'痴求欲女'
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