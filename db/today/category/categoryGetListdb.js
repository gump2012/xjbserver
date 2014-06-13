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
        ,info:'衣带渐宽，为伊憔悴，老公赶紧回家啦。'
        ,pic_url:'http://pic.yupoo.com/yige2002/DOQmTpEj/oBAzJ.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:2
        , cname:'助情催欲'
        ,info:'郎情妾意，干柴烈火，天咋还不黑？'
        ,pic_url:'http://pic.yupoo.com/yige2002/DOQngL5x/8uhFl.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:3
        , cname:'男性玩具'
        ,info:'旅途漫漫，夜夜笙歌，俺不去东莞啦！'
        ,pic_url:'http://pic.yupoo.com/yige2002/DOQngGaW/ur15O.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:4
        , cname:'女性玩具'
        ,info:'头牌佳人，绝世独立，蛋蛋去哪儿啦！'
        ,pic_url:'http://pic.yupoo.com/yige2002/DOQnhp5d/u8BRl.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:5
        , cname:'套套世界'
        ,info:'中央一套，人生逍遥，爸爸我是咋来滴？'
        ,pic_url:'http://pic.yupoo.com/yige2002/DOQmT009/o5mWT.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:6
        , cname:'两性游戏'
        ,info:'花前月下，你侬我侬，假山后边来一发'
        ,pic_url:'http://pic.yupoo.com/yige2002/DOQngy1N/1ZRx9.png'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;