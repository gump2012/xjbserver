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

    newtopic = new todaytopic({
        topicid:3
        ,pic_url:'http://pic.yupoo.com/yige2002/E3eAKxtf/vE158.jpg'
        ,title:'随行随爱'
        ,goods:[
            {product_id:61,pic_url:'http://pic.yupoo.com/yige2002/E59CCRPT/oV0Av.jpg',name:'前戏扣扣套'}
            ,{product_id:354,pic_url:'http://pic.yupoo.com/yige2002/E59CClvH/1iObp.jpg',name:'快感增强香水'}
            ,{product_id:115,pic_url:'http://pic.yupoo.com/yige2002/E59CBVDW/ikdLK.jpg',name:'激情合欢椅'}
            ,{product_id:22,pic_url:'http://pic.yupoo.com/yige2002/E59CByKA/HL7kt.jpg',name:'日本销量第一'}
            ,{product_id:10,pic_url:'http://pic.yupoo.com/yige2002/E59CBKD7/buOdB.jpg',name:'娇羞的情人'}
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
            {product_id:84,pic_url:'http://pic.yupoo.com/yige2002/E59BQ8ca/YBbgk.jpg',name:'倍力乐三倍持久'}
            ,{product_id:307,pic_url:'http://pic.yupoo.com/yige2002/E59BQ38F/cNme8.jpg',name:'分钟罪爱'}
            ,{product_id:212,pic_url:'http://pic.yupoo.com/yige2002/E59BPX6I/BYLqu.jpg',name:'日本娘子装'}
            ,{product_id:80,pic_url:'http://pic.yupoo.com/yige2002/E59BPa3O/FL6af.jpg',name:'时尚丽人必备'}
            ,{product_id:45,pic_url:'http://pic.yupoo.com/yige2002/E59BPj0S/6aZpC.jpg',name:'樱桃小嘴嘘嘘'}
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
            {product_id:66,pic_url:'http://pic.yupoo.com/yige2002/E59CS53R/MSG18.jpg',name:'震动c字库'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/E59CS046/kX5rJ.jpg',name:'来袭丰乳杯'}
            ,{product_id:75,pic_url:'http://pic.yupoo.com/yige2002/E59CSIty/SeUnt.jpg',name:'惊蛇之草'}
            ,{product_id:65,pic_url:'http://pic.yupoo.com/yige2002/E59CRPsq/B8uGr.jpg',name:'首款YD甩震'}
            ,{product_id:38,pic_url:'http://pic.yupoo.com/yige2002/E59CRmiX/122MoR.jpg',name:'增大增粗'}
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
            {product_id:751,pic_url:'http://pic.yupoo.com/yige2002/E59BQSJN/Cbqb7.jpg',name:'名流系列'}
            ,{product_id:756,pic_url:'http://pic.yupoo.com/yige2002/E59CnKvE/Mb9Hc.jpg',name:'巧克力安全套'}
            ,{product_id:609,pic_url:'http://pic.yupoo.com/yige2002/E59Co7Pu/11HwcZ.jpg',name:'女神专用**棒'}
            ,{product_id:753,pic_url:'http://pic.yupoo.com/yige2002/E59CobUE/obUZK.jpg',name:'第六感系列'}
            ,{product_id:85,pic_url:'http://pic.yupoo.com/yige2002/E59CoJoa/dgzJh.jpg',name:'倍力乐**套'}
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