/**
 * Created by lishiming on 14-6-5.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid600_620");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:600
        ,picarr:macroproduct.PID600_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:601
        ,picarr:macroproduct.PID601_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:602
        ,picarr:macroproduct.PID602_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:603
        ,picarr:macroproduct.PID603_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:604
        ,picarr:macroproduct.PID604_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:605
        ,picarr:macroproduct.PID605_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:606
        ,picarr:macroproduct.PID606_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:607
        ,picarr:macroproduct.PID607_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:608
        ,picarr:macroproduct.PID608_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}