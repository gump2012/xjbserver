/**
 * Created by lishiming on 14-5-12.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:101
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHYzDOoq/gOhx7.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYyX6u5/44ls4.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzEkDI/XYNxn.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYyXiPd/okuaQ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzE7JM/kYtwQ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzEmo9/RYNcL.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzEuEG/17mos.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzErUI/BSBqP.jpg'
            ,'http://pic.yupoo.com/yige2002/DHpmq0sR/mRbfr.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzEI4b/lCJB5.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzEMNl/cmYXg.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzELLu/9hfwY.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYzDYLZ/AoGTP.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:102
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHYiHnPj/4PHY.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYiHN8z/Qyaej.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYiHp6w/Fxbc2.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6snklb/vgFee.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6rJoF9/119TcF.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6rJG1h/2Fx2F.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6snu0a/8HbU.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6snllV/15s95g.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6snJuH/ax2mj.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:103
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHYf4b9b/N9fyR.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYf4yqs/zNNP2.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYf4jpm/PPw1t.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYf4wzz/BiGmZ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHYf41Zw/aYrQP.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6yTt23/13UJBz.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:104
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHWQIp7v/G1yC9.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWQIoZH/oY6oK.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWQIETs/gn0ZV.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWQ1FAn/HNGzi.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWQI7ck/jCcvs.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6AInOG/pKO6e.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:105
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DH6BT2LD/3V0Uh.png'
            ,'http://pic.yupoo.com/yige2002/DH6BTHgs/pCcvK.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BSZzj/CVzbK.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BU8iq/8ctua.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BTq4K/Cexcu.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BTmkH/TyYod.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWKi3nc/kIbEZ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWKhUwO/CkzKF.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BVdx6/vKzEW.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BXoK4/CFKxj.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BXppZ/DQ9Ua.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BkVEf/SNOiS.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BlllS/V2iXC.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6BZOpe/vptmz.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6C0jYn/zxwdf.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWKhvXS/MQBmG.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:106
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHWF2fvw/dN9Sc.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWF24ux/PF2R7.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWEl94L/5K2Q4.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6CZQij/tHIE5.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:107
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHWB8COr/rNJvO.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWBPp8i/ghWa1.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6HpKWn/Wp0AZ.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6I5lXi/oVq9z.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6I4NI3/J8BIi.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:108
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHWvdd9A/15Fd1F.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWvdDhw/BKgTI.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWvdy4u/reHbQ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWvdEdR/P5Vhs.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWuwFNG/1Hsws.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWvdCyX/H8zkb.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWvdWgp/3GMhI.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWuwX31/xkybA.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWvdXtz/QO1f4.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:109
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHWldlTk/O4d6U.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6KFtu1/15kzr4.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWlUfX8/PGUni.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:110
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DH6PJyHu/HeQmY.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:111
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHWhYuFz/2yXgl.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWiFsqV/VfJOC.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6Qt9Va/15aadW.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6Qs9Rr/RjsO8.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6Qt8A8/8GwwJ.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6QtGUr/fW9jM.jpg'
            ,'http://pic.yupoo.com/yige2002/DHWiFhy6/KsZjJ.jpg'
            ,'http://pic.yupoo.com/yige2002/DH6QsFaI/xzob2.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:112
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHW5g4bU/DqXkO.jpg'
            ,'http://pic.yupoo.com/yige2002/DHW5geq3/1ySyI.jpg'
            ,'http://pic.yupoo.com/yige2002/DH70DnGk/15lwaA.jpg'
            ,'http://pic.yupoo.com/yige2002/DHW5g9UK/ifMGr.jpg'
            ,'http://pic.yupoo.com/yige2002/DH700fVW/eRMQq.jpg'
            ,'http://pic.yupoo.com/yige2002/DH70CQxP/13NbhT.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:113
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHMYWGPK/w7ZX4.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMYWBFa/zURrC.jpg'
            ,null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:114
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHMUFcp3/v83Yg.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUFrtI/jac7V.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUFA8u/QFQKJ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUFIAr/EDsPr.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUFN9z/7WRrQ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUFZSI/sSUo4.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUGfFo/RbT1Y.jpg'
            ,'http://pic.yupoo.com/yige2002/DHMUGg8h/5SuMz.jpg'
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