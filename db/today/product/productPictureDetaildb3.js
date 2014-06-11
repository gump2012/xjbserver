/**
 * Created by lishiming on 14-5-12.
 */
var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid3_pid41_60");

function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:41
        ,picarr:macroproduct.PID41_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:42
        ,picarr:macroproduct.PID42_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:43
        ,picarr:macroproduct.PID43_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:44
        ,picarr:macroproduct.PID44_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:45
        ,picarr:macroproduct.PID45_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:46
        ,picarr:macroproduct.PID46_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:47
        ,picarr:macroproduct.PID47_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:48
        ,picarr:macroproduct.PID48_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:49
        ,picarr:macroproduct.PID49_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:50
        ,picarr:macroproduct.PID50_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:51
        ,picarr:macroproduct.PID51_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:52
        ,picarr:macroproduct.PID52_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:53
        ,picarr:macroproduct.PID53_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:54
        ,picarr:macroproduct.PID54_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:55
        ,picarr:macroproduct.PID55_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:56
        ,picarr:macroproduct.PID56_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:57
        ,picarr:macroproduct.PID57_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:58
        ,picarr:macroproduct.PID58_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:59
        ,picarr:macroproduct.PID59_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:60
        ,picarr:macroproduct.PID60_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;