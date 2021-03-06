/**
 * Created by gump on 9/28/14.
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

    mongoose.model('todayshoptopicold',userSchema);

    var todaytopic = mongoose.model('todayshoptopicold');

    todaytopic.remove({}, function(err) {
    });

    newtopic = new todaytopic({
        topicid:3
        ,pic_url:'http://pic.yupoo.com/yige2002/E3eAKxtf/vE158.jpg'
        ,title:'随行随爱'
        ,goods:[
            {product_id:61,pic_url:'http://pic.yupoo.com/yige2002/E5KWDJl5/yN8JB.jpg',name:'前戏扣扣套'}
            ,{product_id:354,pic_url:'http://pic.yupoo.com/yige2002/E5KWDxsk/sYB1v.jpg',name:'快感增强香水'}
            ,{product_id:115,pic_url:'http://pic.yupoo.com/yige2002/E5KWEdKn/6VBo3.jpg',name:'激情合欢椅'}
            ,{product_id:22,pic_url:'http://pic.yupoo.com/yige2002/E5KWDlxi/VRjtR.jpg',name:'日本销量第一'}
            ,{product_id:10,pic_url:'http://pic.yupoo.com/yige2002/E5KWCTrw/N3oHL.jpg',name:'娇羞的情人'}
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

    var newtopic = new todaytopic({
        topicid:1
        ,pic_url:'http://pic.yupoo.com/yige2002/E3ewm85u/zK5a2.jpg'
        ,title:'TOP疯抢'
        ,goods:[
            {product_id:84,pic_url:'http://pic.yupoo.com/yige2002/E5KVCjes/GmQTv.jpg',name:'倍力乐三倍持久'}
            ,{product_id:307,pic_url:'http://pic.yupoo.com/yige2002/E5KVB5vp/FTDsZ.jpg',name:'7分钟罪爱'}
            ,{product_id:212,pic_url:'http://pic.yupoo.com/yige2002/E5KVBAyZ/2alv8.jpg',name:'日本娘子装'}
            ,{product_id:80,pic_url:'http://pic.yupoo.com/yige2002/E5KVBaCd/QmB4o.jpg',name:'时尚丽人必备'}
            ,{product_id:45,pic_url:'http://pic.yupoo.com/yige2002/E5KVBPSK/UmJCV.jpg',name:'樱桃小嘴嘘嘘'}
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
        topicid:4
        ,pic_url:'http://pic.yupoo.com/yige2002/E3eD8iC3/UtqQ3.jpg'
        ,title:'久到离谱'
        ,goods:[
            {product_id:66,pic_url:'http://pic.yupoo.com/yige2002/E5KBuQYQ/LAiKP.jpg',name:'震动c字库'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/E5KBua1X/nt70n.jpg',name:'来袭丰乳杯'}
            ,{product_id:75,pic_url:'http://pic.yupoo.com/yige2002/E5KBtYdz/cEBuw.jpg',name:'惊蛇之草'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/E5KBtWfq/d7MM7.jpg',name:'首款YD甩震'}
            ,{product_id:38,pic_url:'http://pic.yupoo.com/yige2002/E5KBtE80/NaQ2e.jpg',name:'增大增粗'}
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

    newtopic = new todaytopic({
        topicid:2
        ,pic_url:'http://pic.yupoo.com/yige2002/E59CaIlI/12uskm.jpg'
        ,title:'高潮密码'
        ,goods:[
            {product_id:751,pic_url:'http://pic.yupoo.com/yige2002/E5KW4T4f/kzyeL.jpg',name:'名流系列'}
            ,{product_id:756,pic_url:'http://pic.yupoo.com/yige2002/E5KW4XXQ/KZxVE.jpg',name:'巧克力安全套'}
            ,{product_id:609,pic_url:'http://pic.yupoo.com/yige2002/E5KW5CYe/14tFg0.jpg',name:'女神专用AV棒'}
            ,{product_id:753,pic_url:'http://pic.yupoo.com/yige2002/E5KW5dKt/6OtUj.jpg',name:'第六感系列'}
            ,{product_id:85,pic_url:'http://pic.yupoo.com/yige2002/E5KW4pwU/2w2WQ.jpg',name:'倍力乐扣扣套'}
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