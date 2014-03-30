/**
 * Created by gump on 3/17/14.
 */

function creatdb(mongoose){
    var proSchema = new mongoose.Schema({
        pid                 :{
            type: Number,
            unique: true
        }
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
    });

    var newCategory = new todayCategory({pid:1
        ,cid:1
        ,title:'朦胧透明露乳开档蕾丝大码短裙睡衣'
        ,volume:16937
        ,recentvolume:758
        ,org_price:58.00
        ,price:22.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://img01.taobaocdn.com/imgextra/i1/468359490/T2pqkeXhFXXXXXXXXX_!!468359490.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:2
        ,cid:1
        ,title:'【年度盛典】久慕雅黛~高贵诱惑透视吊带睡裙'
        ,volume:23403
        ,recentvolume:1009
        ,org_price:46.00
        ,price:22.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://img01.taobaocdn.com/imgextra/i1/468359490/T2thy1Xt0aXXXXXXXX-468359490.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:3
        ,cid:1
        ,title:'日式印花和服三点式二件套开襟睡裙'
        ,volume:16158
        ,recentvolume:22
        ,org_price:80.00
        ,price:19.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://img03.taobaocdn.com/imgextra/i3/468359490/T2NyVRXvVaXXXXXXXX-468359490.gif'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:4
        ,cid:1
        ,title:'久慕雅黛  性感分体诱惑开裆透视激情三点式内衣'
        ,volume:3256
        ,recentvolume:562
        ,org_price:120.00
        ,price:91.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://img02.taobaocdn.com/imgextra/i2/468359490/T2ho1NXyRaXXXXXXXX-468359490.gif'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:5
        ,cid:1
        ,title:'蕾丝花边透明性感睡裙诱惑睡衣'
        ,volume:3154
        ,recentvolume:144
        ,org_price:1210.00
        ,price:459.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://img04.taobaocdn.com/imgextra/i4/468359490/T2dqEYXnJaXXXXXXXX_!!468359490.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:6
        ,cid:1
        ,title:'久慕雅黛 激情三点式蕾丝花边性感睡裙'
        ,volume:315145
        ,recentvolume:121
        ,org_price:15450.00
        ,price:945.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://img03.taobaocdn.com/imgextra/i3/468359490/T2yiFhXCxaXXXXXXXX_!!468359490.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;