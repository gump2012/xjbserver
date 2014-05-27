/**
 * Created by lishiming on 14-5-27.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:751
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DKJgI2JP/OjksK.jpg'
            ,'http://pic.yupoo.com/yige2002/DKJgMcn2/MLBMJ.jpg'
            ,'http://pic.yupoo.com/yige2002/DKJgCzhw/Gaofr.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:752
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DKPYvmmJ/Obb2O.jpg'
            ,'http://pic.yupoo.com/yige2002/DKPYvqbh/mnEEL.jpg'
            ,'http://pic.yupoo.com/yige2002/DKPYvHHO/5lYZc.jpg'
            ,'http://pic.yupoo.com/yige2002/DKPYuE66/skpK9.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:753
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DKSyjuUY/7grHb.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSyjux8/dYEFm.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSyeHZG/HjSn8.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSykbkM/fjegP.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSyjPWZ/xkRI0.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSyi5fm/YhLk2.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSyicXW/JFX6J.jpg'
            ,'http://pic.yupoo.com/yige2002/DKSyibtA/svtpe.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}