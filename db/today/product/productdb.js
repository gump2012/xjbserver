/**
 * Created by gump on 3/17/14.
 */

function creatdb(mongoose){
    var proSchema = new mongoose.Schema({
        pid                 :Number
        ,cid                :Number
        ,title              :String
        ,volume             :Number
        ,recentvolume       :Number
        ,org_price          :Number
        ,price              :Number
        ,state              :Number
        ,stamper            :String
        ,pic_url            :String
        ,time               :Number
    });

    mongoose.model('todayProduct',proSchema);

    var todayCategory = mongoose.model('todayProduct');

    todayCategory.remove({}, function(err) {
        console.log('todayProduct removed')
    });

    var newCategory = new todayCategory({pid:1
        ,cid:1
        ,title:'套'
        ,volume:3
        ,recentvolume:1
        ,org_price:10.00
        ,price:9.00
        ,state:1
        ,stamper:''
        ,pic_url:''
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;