/**
 * Created by gump on 3/15/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
         cid     :{
            type: Number,
            unique: true
        }
        ,cname   :String
        ,info    :String
        ,pic_url :String
    });

    mongoose.model('todayCategoryList',userSchema);

    var todayCategory = mongoose.model('todayCategoryList');

    todayCategory.remove({}, function(err) {
    });

    var newCategory = new todayCategory({cid:1
        ,cname:'情趣内衣'
        ,info:'衣带渐宽,为伊憔悴'
        ,pic_url:'http://115.28.225.137:10080/res/images/category/list/categorylist1.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:2
        , cname:'助情催欲'
        ,info:'郎情妾意,干柴烈火'
        ,pic_url:'http://115.28.225.137:10080/res/images/category/list/categorylist2.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:3
        , cname:'男性玩具'
        ,info:'旅途漫漫,夜夜笙歌'
        ,pic_url:'http://115.28.225.137:10080/res/images/category/list/categorylist3.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:4
        , cname:'女性玩具'
        ,info:'头牌佳人,绝世独立'
        ,pic_url:'http://115.28.225.137:10080/res/images/category/list/categorylist4.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:5
        , cname:'套套世界'
        ,info:'超薄 持久 大颗粒 螺纹'
        ,pic_url:'http://115.28.225.137:10080/res/images/category/list/categorylist5.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;