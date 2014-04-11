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
        ,title:'白色性感漏乳挂脖开怀性感连体情趣内衣'
        ,volume:0
        ,recentvolume:0
        ,org_price:36.00
        ,price:18.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct1.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:2
        ,cid:1
        ,title:'百花天使 公主透明纱网抹胸短裙 刺激你的眼球'
        ,volume:0
        ,recentvolume:0
        ,org_price:30.00
        ,price:15.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct2.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:3
        ,cid:1
        ,title:'百花天使 性感吊带抹胸系带网纱情趣内衣'
        ,volume:16158
        ,recentvolume:22
        ,org_price:22.00
        ,price:19.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct3.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:4
        ,cid:1
        ,title:'百花天使 性感抹胸透视蕾丝诱惑内衣'
        ,volume:3256
        ,recentvolume:562
        ,org_price:50.00
        ,price:22.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct4.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:5
        ,cid:1
        ,title:'百花天使 性感机车短裙野战必备'
        ,volume:3154
        ,recentvolume:144
        ,org_price:46.00
        ,price:22.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct5.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:6
        ,cid:1
        ,title:'百花天使 性感蕾丝花边 激情T裤套装'
        ,volume:315145
        ,recentvolume:121
        ,org_price:35.00
        ,price:18.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct6.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:7
        ,cid:1
        ,title:'百花天使 性感蕾丝花边 激情开衫系带连体衣'
        ,volume:315145
        ,recentvolume:121
        ,org_price:50.00
        ,price:25.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct7.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:8
        ,cid:1
        ,title:'百花天使 打造你的女仆 性感蕾丝吊带女仆装'
        ,volume:315145
        ,recentvolume:121
        ,org_price:65.00
        ,price:25.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct8.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:9
        ,cid:1
        ,title:'百花天使 激情透视蕾丝花边挂脖吊带性感情趣内衣'
        ,volume:315145
        ,recentvolume:121
        ,org_price:35.00
        ,price:18.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct9.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:10
        ,cid:1
        ,title:'百花天使 致命诱惑 侧开透视蕾丝薄纱睡裙'
        ,volume:315145
        ,recentvolume:121
        ,org_price:49.00
        ,price:25.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct10.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:11
        ,cid:1
        ,title:'百花天使 蕾丝花边透明性感睡裙诱惑睡衣'
        ,volume:315145
        ,recentvolume:121
        ,org_price:49.00
        ,price:25.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct11.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:12
        ,cid:1
        ,title:'百花天使 赛车啦啦队服学生装水手服 角色扮演'
        ,volume:315145
        ,recentvolume:121
        ,org_price:65.00
        ,price:28.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct12.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:13
        ,cid:1
        ,title:'百花天使印花蕾丝比基尼性感套装'
        ,volume:315145
        ,recentvolume:121
        ,org_price:36.00
        ,price:18.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct13.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:14
        ,cid:1
        ,title:'百花天使性感抹胸挂脖诱惑开裆T裤激情连体衣'
        ,volume:315145
        ,recentvolume:121
        ,org_price:32.00
        ,price:15.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct14.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:15
        ,cid:1
        ,title:'百花天使性感薄纱蕾丝透明公主性感睡衣睡裙'
        ,volume:315145
        ,recentvolume:121
        ,org_price:36.00
        ,price:18.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct15.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:16
        ,cid:1
        ,title:'百花天使暗夜销魂黑色透明网纱 诱惑你的神经'
        ,volume:315145
        ,recentvolume:121
        ,org_price:48.00
        ,price:24.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct16.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:17
        ,cid:1
        ,title:'百花天使火爆仿皮野性魅力两件式情趣内衣'
        ,volume:315145
        ,recentvolume:121
        ,org_price:32.00
        ,price:15.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct17.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:18
        ,cid:1
        ,title:'百花天使胸前镂空四面开裆网眼连体衣'
        ,volume:315145
        ,recentvolume:121
        ,org_price:56.00
        ,price:28.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct18.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:19
        ,cid:1
        ,title:'百花天使良家超长性感情趣睡袍'
        ,volume:315145
        ,recentvolume:121
        ,org_price:40.00
        ,price:25.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct19.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:20
        ,cid:1
        ,title:'百花天使高贵紫色 女神来袭 吊带睡裙'
        ,volume:315145
        ,recentvolume:121
        ,org_price:80.00
        ,price:35.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/categoryproduct20.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;