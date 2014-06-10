/**
 * Created by lishiming on 14-5-12.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid1_20");

function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:1
        ,picarr:[
            macroproduct.PID1_DETAIL_1
            ,macroproduct.PID1_DETAIL_2
            ,macroproduct.PID1_DETAIL_3
            ,macroproduct.PID1_DETAIL_4
            ,macroproduct.PID1_DETAIL_5
            ,macroproduct.PID1_DETAIL_6
            ,macroproduct.PID1_DETAIL_7
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:2
        ,picarr:[
            macroproduct.PID2_DETAIL_1
            ,macroproduct.PID2_DETAIL_2
            ,macroproduct.PID2_DETAIL_3
            ,macroproduct.PID2_DETAIL_4
            ,macroproduct.PID2_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:3
        ,picarr:[
            macroproduct.PID3_DETAIL_1
            ,macroproduct.PID3_DETAIL_2
            ,macroproduct.PID3_DETAIL_3
            ,macroproduct.PID3_DETAIL_4
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:4
        ,picarr:[
            macroproduct.PID4_DETAIL_1
            ,macroproduct.PID4_DETAIL_2
            ,macroproduct.PID4_DETAIL_3
            ,macroproduct.PID4_DETAIL_4
            ,macroproduct.PID4_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:5
        ,picarr:[
            macroproduct.PID5_DETAIL_1
            ,macroproduct.PID5_DETAIL_2
            ,macroproduct.PID5_DETAIL_3
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:6
        ,picarr:[
            macroproduct.PID6_DETAIL_1
            ,macroproduct.PID6_DETAIL_2
            ,macroproduct.PID6_DETAIL_3
            ,macroproduct.PID6_DETAIL_4
            ,macroproduct.PID6_DETAIL_5
            ,macroproduct.PID6_DETAIL_6
            ,macroproduct.PID6_DETAIL_7
            ,macroproduct.PID6_DETAIL_8
            ,macroproduct.PID6_DETAIL_9
            ,macroproduct.PID6_DETAIL_10
            ,macroproduct.PID6_DETAIL_11
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:7
        ,picarr:[
            macroproduct.PID7_DETAIL_1
            ,macroproduct.PID7_DETAIL_2
            ,macroproduct.PID7_DETAIL_3
            ,macroproduct.PID7_DETAIL_4
            ,macroproduct.PID7_DETAIL_5
            ,macroproduct.PID7_DETAIL_6
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:8
        ,picarr:[
            macroproduct.PID8_DETAIL_1
            ,macroproduct.PID8_DETAIL_2
            ,macroproduct.PID8_DETAIL_3
            ,macroproduct.PID8_DETAIL_4
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:9
        ,picarr:[
            macroproduct.PID9_DETAIL_1
            ,macroproduct.PID9_DETAIL_2
            ,macroproduct.PID9_DETAIL_3
            ,macroproduct.PID9_DETAIL_4
            ,macroproduct.PID9_DETAIL_5
            ,macroproduct.PID9_DETAIL_6
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:10
        ,picarr:[
            macroproduct.PID10_DETAIL_1
            ,macroproduct.PID10_DETAIL_2
            ,macroproduct.PID10_DETAIL_3
            ,macroproduct.PID10_DETAIL_4
            ,macroproduct.PID10_DETAIL_5
            ,macroproduct.PID10_DETAIL_6
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:11
        ,picarr:[
            macroproduct.PID11_DETAIL_1
            ,macroproduct.PID11_DETAIL_2
            ,macroproduct.PID11_DETAIL_3
            ,macroproduct.PID11_DETAIL_4
            ,macroproduct.PID11_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:12
        ,picarr:[
            macroproduct.PID12_DETAIL_1
            ,macroproduct.PID12_DETAIL_2
            ,macroproduct.PID12_DETAIL_3
            ,macroproduct.PID12_DETAIL_4
            ,macroproduct.PID12_DETAIL_5
            ,macroproduct.PID12_DETAIL_6
            ,macroproduct.PID12_DETAIL_7
            ,macroproduct.PID12_DETAIL_8
            ,macroproduct.PID12_DETAIL_9
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:13
        ,picarr:[
            macroproduct.PID13_DETAIL_1
            ,macroproduct.PID13_DETAIL_2
            ,macroproduct.PID13_DETAIL_3
            ,macroproduct.PID13_DETAIL_4
            ,macroproduct.PID13_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:14
        ,picarr:[
            macroproduct.PID14_DETAIL_1
            ,macroproduct.PID14_DETAIL_2
            ,macroproduct.PID14_DETAIL_3
            ,macroproduct.PID14_DETAIL_4
            ,macroproduct.PID14_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:15
        ,picarr:[
            macroproduct.PID15_DETAIL_1
            ,macroproduct.PID15_DETAIL_2
            ,macroproduct.PID15_DETAIL_3
            ,macroproduct.PID15_DETAIL_4
            ,macroproduct.PID15_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:16
        ,picarr:[
            macroproduct.PID16_DETAIL_1
            ,macroproduct.PID16_DETAIL_2
            ,macroproduct.PID16_DETAIL_3
            ,macroproduct.PID16_DETAIL_4
            ,macroproduct.PID16_DETAIL_5
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:17
        ,picarr:[
            macroproduct.PID17_DETAIL_1
            ,macroproduct.PID17_DETAIL_2
            ,macroproduct.PID17_DETAIL_3
            ,macroproduct.PID17_DETAIL_4
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:18
        ,picarr:[
            macroproduct.PID18_DETAIL_1
            ,macroproduct.PID18_DETAIL_2
            ,macroproduct.PID18_DETAIL_3
            ,macroproduct.PID18_DETAIL_4
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:19
        ,picarr:[
            macroproduct.PID19_DETAIL_1
            ,macroproduct.PID19_DETAIL_2
            ,macroproduct.PID19_DETAIL_3
            ,macroproduct.PID19_DETAIL_4
            ,macroproduct.PID19_DETAIL_5
            ,macroproduct.PID19_DETAIL_6
            ,macroproduct.PID19_DETAIL_7
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:20
        ,picarr:[
            macroproduct.PID20_DETAIL_1
            ,macroproduct.PID20_DETAIL_2
            ,macroproduct.PID20_DETAIL_3
            ,macroproduct.PID20_DETAIL_4
            ,macroproduct.PID20_DETAIL_5
            ,macroproduct.PID20_DETAIL_6
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;