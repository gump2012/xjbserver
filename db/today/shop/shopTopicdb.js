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
        ,pic_url:'http://pic.yupoo.com/yige2002/E3ewm85u/zK5a2.jpg'
        ,title:'TOP疯抢'
        ,goods:[
            {product_id:84,pic_url:'http://pic.yupoo.com/yige2002/E4QRKyWv/BitYr.jpg',name:'一套天亮'}
            ,{product_id:617,pic_url:'http://pic.yupoo.com/yige2002/E3ewL6NI/9qnj.jpg',name:'旷野极乐'}
            ,{product_id:461,pic_url:'http://pic.yupoo.com/yige2002/E3ewL10D/rslyW.jpg',name:'浪语吟声'}
            ,{product_id:212,pic_url:'http://pic.yupoo.com/yige2002/E3ewKPv7/NA0qK.jpg',name:'出水芙蓉'}
            ,{product_id:30,pic_url:'http://pic.yupoo.com/yige2002/E3ewKKe1/QPuRm.jpg',name:'捕获欲望'}
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
        ,pic_url:'http://pic.yupoo.com/yige2002/E3eyFln9/YciOB.jpg'
        ,title:'一套放纵'
        ,goods:[
            {product_id:751,pic_url:'http://pic.yupoo.com/yige2002/E4QRL6Yb/14KiYo.jpg',name:'名流套餐'}
            ,{product_id:90,pic_url:'http://pic.yupoo.com/yige2002/E3eyZXJf/Vsga7.jpg',name:'果然快乐'}
            ,{product_id:752,pic_url:'http://pic.yupoo.com/yige2002/E3eyZMZC/MM3ky.jpg',name:'冈本003'}
            ,{product_id:753,pic_url:'http://pic.yupoo.com/yige2002/E3eyZTgL/EA31J.jpg',name:'第六感套餐'}
            ,{product_id:89,pic_url:'http://pic.yupoo.com/yige2002/E3eyZO5H/CnULs.jpg',name:'倍力乐套餐'}
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
        ,pic_url:'http://pic.yupoo.com/yige2002/E3eAKxtf/vE158.jpg'
        ,title:'随行随爱'
        ,goods:[
            {product_id:61,pic_url:'http://pic.yupoo.com/yige2002/E4QRLhNn/aOwaX.jpg',name:'居家必备'}
            ,{product_id:22,pic_url:'http://pic.yupoo.com/yige2002/E3eBcCom/uHjjJ.jpg',name:'延时传奇'}
            ,{product_id:82,pic_url:'http://pic.yupoo.com/yige2002/E3eBcgDf/pjiWH.jpg',name:'潮吹利器'}
            ,{product_id:354,pic_url:'http://pic.yupoo.com/yige2002/E3eBbMuz/lBqsy.jpg',name:'飙升快感'}
            ,{product_id:115,pic_url:'http://pic.yupoo.com/yige2002/E3eBbuKq/13XtMD.jpg',name:'非凡激情'}
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
        ,pic_url:'http://pic.yupoo.com/yige2002/E3eD8iC3/UtqQ3.jpg'
        ,title:'久到离谱'
        ,goods:[
            {product_id:66,pic_url:'http://pic.yupoo.com/yige2002/E4QRKOR9/tKURR.jpg',name:'天使礼物'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/E3eDx7wJ/SIM2A.jpg',name:'YD甩震'}
            ,{product_id:72,pic_url:'http://pic.yupoo.com/yige2002/E3eDx0ru/MNFLZ.jpg',name:'巨乳来袭'}
            ,{product_id:75,pic_url:'http://pic.yupoo.com/yige2002/E3eDx1hz/u39ew.jpg',name:'惊蛇之草'}
            ,{product_id:615,pic_url:'http://pic.yupoo.com/yige2002/E3eDx8nt/ltF65.jpg',name:'闺趣秘密'}
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