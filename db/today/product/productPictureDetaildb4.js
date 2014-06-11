/**
 * Created by lishiming on 14-5-12.
 */
var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid61_80");

function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:61
        ,picarr:macroproduct.PID61_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:62
        ,picarr:macroproduct.PID62_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:63
        ,picarr:macroproduct.PID63_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:64
        ,picarr:macroproduct.PID64_DETAIL});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:65
        ,picarr:macroproduct.PID65_DETAIL});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:66
        ,picarr:macroproduct.PID66_DETAIL});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:67
        ,picarr:macroproduct.PID67_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:68
        ,picarr:macroproduct.PID68_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:69
        ,picarr:macroproduct.PID69_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:70
        ,picarr:macroproduct.PID70_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:71
        ,picarr:macroproduct.PID71_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:72
        ,picarr:macroproduct.PID72_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:73
        ,picarr:macroproduct.PID73_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:74
        ,picarr:macroproduct.PID74_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:75
        ,picarr:macroproduct.PID75_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:76
        ,picarr:macroproduct.PID76_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:77
        ,picarr:macroproduct.PID77_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:78
        ,picarr:macroproduct.PID78_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:79
        ,picarr:macroproduct.PID79_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:80
        ,picarr:macroproduct.PID80_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;