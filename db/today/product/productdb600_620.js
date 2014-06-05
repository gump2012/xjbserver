/**
 * Created by lishiming on 14-6-5.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProduct');

    var newCategory = new todayCategory({pid:600
        ,cid:4
        ,title:'阴道哑铃'
        ,volume:0
        ,recentvolume:0
        ,org_price:299.00
        ,price:188.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://pic.yupoo.com/yige2002/DO6hmjUb/LADt7.jpg'
        ,time:0
        ,gallery:[
            "http://pic.yupoo.com/yige2002/DO6hmbYG/TOPvf.jpg"
            ,"http://pic.yupoo.com/yige2002/DO6hlRs4/RBT2A.jpg"
            ,"http://pic.yupoo.com/yige2002/DO6hmprO/IrcG0.jpg"
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:601
        ,cid:4
        ,title:'诺兰音乐人'
        ,volume:0
        ,recentvolume:0
        ,org_price:998.00
        ,price:399.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://pic.yupoo.com/yige2002/DO6iocFf/f6G0y.jpg'
        ,time:0
        ,gallery:[
            "http://pic.yupoo.com/yige2002/DO6ino2O/121ieL.jpg"
            ,"http://pic.yupoo.com/yige2002/DO6i3Msk/uowfl.jpg"
            ,"http://pic.yupoo.com/yige2002/DO6inW9R/j7o26.jpg"
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

}