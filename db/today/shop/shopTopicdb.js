/**
 * Created by gump on 4/21/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        topicid                    :{
            type: Number,
            unique: true
        }
        ,title                  :String
        ,pic_url                :String
        ,goods                  :[mongoose.Schema.Types.Mixed]
    });

    mongoose.model('todayshoptopic',userSchema);

    var todaytopic = mongoose.model('todayshoptopic');

    todaytopic.remove({}, function(err) {
    });

    var newtopic = new todaytopic({
        topicid:1
        ,pic_url:'http://pic.yupoo.com/yige2002/DOwAoVce/NyfKY.jpg'
        ,title:'TOP20疯抢宝贝'
        ,goods:[
            {product_id:25,pic_url:'http://pic.yupoo.com/yige2002/DNlL8kID/HAont.jpg'}
            ,{product_id:49,pic_url:'http://pic.yupoo.com/yige2002/DNlMhxkn/1485rg.jpg'}
            ,{product_id:78,pic_url:'http://pic.yupoo.com/yige2002/DNlMWJeY/kCaW9.jpg'}
            ,{product_id:84,pic_url:'http://pic.yupoo.com/yige2002/DNlUCOon/XeNIj.jpg'}
            ,{product_id:55,pic_url:'http://pic.yupoo.com/yige2002/DH3GoWqq/EwFNz.jpg'}
            ,{product_id:201,pic_url:'http://pic.yupoo.com/yige2002/DOkLdDwZ/7zBIU.jpg'}
            ,{product_id:352,pic_url:'http://pic.yupoo.com/yige2002/DOkRE6Pj/f5jKx.jpg'}
            ,{product_id:112,pic_url:'http://pic.yupoo.com/yige2002/DH3VPuKW/1EAPA.jpg'}
            ,{product_id:58,pic_url:'http://pic.yupoo.com/yige2002/DH3GohV6/7Gmci.jpg'}
            ,{product_id:41,pic_url:'http://pic.yupoo.com/yige2002/DH3GlZxr/9inI6.jpg'}
            ,{product_id:15,pic_url:'http://pic.yupoo.com/yige2002/DOgfvuGY/rav5G.jpg'}
            ,{product_id:91,pic_url:'http://pic.yupoo.com/yige2002/DH3STwHP/13tI3b.jpg'}
            ,{product_id:86,pic_url:'http://pic.yupoo.com/yige2002/DH3SRfnk/11oKcw.jpg'}
            ,{product_id:353,pic_url:'http://pic.yupoo.com/yige2002/DOkS4wvv/eqU3Y.jpg'}
            ,{product_id:102,pic_url:'http://pic.yupoo.com/yige2002/DH3VO2As/WL7gw.jpg'}
            ,null
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newtopic = new todaytopic({
        topicid:2
        ,pic_url:'http://pic.yupoo.com/yige2002/DOwAdF35/NTojE.jpg'
        ,title:'安全套餐'
        ,goods:[
            {product_id:753,pic_url:'http://pic.yupoo.com/yige2002/DNrkW15S/z6VcE.jpg'}
            ,{product_id:752,pic_url:'http://pic.yupoo.com/yige2002/DNrjIGgi/vMWra.jpg'}
            ,{product_id:751,pic_url:'http://pic.yupoo.com/yige2002/DNriZ9GD/9ebIv.jpg'}
            ,{product_id:89,pic_url:'http://pic.yupoo.com/yige2002/DNqwOxWu/b36HX.jpg'}
            ,{product_id:90,pic_url:'http://pic.yupoo.com/yige2002/DNqxcFrz/tIPa3.jpg'}
            ,null
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newtopic = new todaytopic({
        topicid:3
        ,pic_url:'http://pic.yupoo.com/yige2002/DOwACWbg/X9vAf.jpg'
        ,title:'性福必备'
        ,goods:[
            {product_id:22,pic_url:'http://pic.yupoo.com/yige2002/DNrpGred/c1JSp.jpg'}
            ,{product_id:82,pic_url:'http://pic.yupoo.com/yige2002/DNrqw0Dg/12CWkn.jpg'}
            ,{product_id:61,pic_url:'http://pic.yupoo.com/yige2002/DNrq76Cq/cuJtx.jpg'}
            ,{product_id:105,pic_url:'http://pic.yupoo.com/yige2002/DNrrigN8/6n6OI.jpg'}
            ,{product_id:107,pic_url:'http://pic.yupoo.com/yige2002/DNrs2Lci/TSA81.jpg'}
            ,{product_id:453,pic_url:'http://pic.yupoo.com/yige2002/DQnTyewy/fnr8B.jpg'}
            ,{product_id:83,pic_url:'http://pic.yupoo.com/yige2002/DH3SPPlf/DVXy0.jpg'}
            ,{product_id:106,pic_url:'http://pic.yupoo.com/yige2002/DH3VOv2A/GFBuE.jpg'}
            ,{product_id:355,pic_url:'http://pic.yupoo.com/yige2002/DOkSXd5q/UApJ0.jpg'}
            ,{product_id:451,pic_url:'http://pic.yupoo.com/yige2002/DQnSg5yh/Ng3ln.jpg'}
            ,{product_id:85,pic_url:'http://pic.yupoo.com/yige2002/DH3SR8mu/BxDzU.jpg'}
            ,{product_id:454,pic_url:'http://pic.yupoo.com/yige2002/DQnU2teU/11UcTK.jpg'}
            ,{product_id:356,pic_url:'http://pic.yupoo.com/yige2002/DOkT5QEz/Ley58.jpg'}
            ,{product_id:204,pic_url:'http://pic.yupoo.com/yige2002/DOkMjq1H/Kvdcv.jpg'}
            ,{product_id:357,pic_url:'http://pic.yupoo.com/yige2002/DOkTPkUA/R1RUs.jpg'}
            ,{product_id:203,pic_url:'http://pic.yupoo.com/yige2002/DOkLYQ0E/k3NrT.jpg'}
            ,{product_id:358,pic_url:'http://pic.yupoo.com/yige2002/DOkUcjmO/lAMXS.jpg'}
            ,{product_id:452,pic_url:'http://pic.yupoo.com/yige2002/DQnSPu71/bDEPB.jpg'}
            ,null
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newtopic = new todaytopic({
        topicid:4
        ,pic_url:'http://pic.yupoo.com/yige2002/DJo4PeFr/FNA3t.jpg'
        ,title:'痴球欲女'
        ,goods:[
            {product_id:66,pic_url:'http://pic.yupoo.com/yige2002/DNrzi6J8/DWy0.jpg'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/DNryNX09/4TBpm.jpg'}
            ,{product_id:80,pic_url:'http://pic.yupoo.com/yige2002/DNrC77fG/EwkTR.jpg'}
            ,{product_id:75,pic_url:'http://pic.yupoo.com/yige2002/DNrBMBVC/bXxL2.jpg'}
            ,{product_id:72,pic_url:'http://pic.yupoo.com/yige2002/DNrBo6OL/7Bns2.jpg'}
            ,{product_id:74,pic_url:'http://pic.yupoo.com/yige2002/DH3K9TxX/3vnEj.jpg'}
            ,{product_id:69,pic_url:'http://pic.yupoo.com/yige2002/DH3KMk6o/CyzBc.jpg'}
            ,{product_id:68,pic_url:'http://pic.yupoo.com/yige2002/DH3KNfuh/zUqY8.jpg'}
            ,{product_id:67,pic_url:'http://pic.yupoo.com/yige2002/DH3KM633/LxJf7.jpg'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/DH3KMEOv/sziBp.jpg'}
            ,null
        ]
    });
    newtopic.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;