/**
 * Created by lishiming on 14-6-11.
 */
var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid200_220");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:200
        ,picarr:macroproduct.PID200_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:201
        ,picarr:macroproduct.PID201_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:202
        ,picarr:macroproduct.PID202_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:203
        ,picarr:macroproduct.PID203_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:204
        ,picarr:macroproduct.PID204_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:205
        ,picarr:macroproduct.PID205_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}