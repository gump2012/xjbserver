/**
 * Created by lishiming on 14-5-12.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:1
        ,picarr:[
            'http://pic.yupoo.com/yige2002/DHwbEWTA/ETRUp.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwbFhHI/eWP6g.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwbFkbA/3grNo.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwb15rF/uOd6h.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwbFuCa/RRUmO.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwb1qWw/zbOmf.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwbE6lN/qsKpd.jpg'
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
            'http://pic.yupoo.com/yige2002/DHwd9KRL/Deexn.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwdaacB/XtNy9.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwdaarP/EI5xt.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwdapVs/GG0Mg.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwdavue/VnNsm.jpg'
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
            'http://pic.yupoo.com/yige2002/DHwgt9Zg/xGdy4.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwgtaTp/1lW84.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwgtc6E/oqbK4.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwgtA8l/bY9ce.jpg'
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
            'http://pic.yupoo.com/yige2002/DHwlr2gs/GNJVZ.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwlrz0Q/VE4je.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwlrfKf/14d0um.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwlrvZJ/C2Wig.jpg'
            ,'http://pic.yupoo.com/yige2002/DHwlrBrR/IGTVK.jpg'
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
            'http://pic.yupoo.com/yige2002/DHy3mEHZ/nx02l.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy2JfMy/FPZGb.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy3obyC/14Jcjx.jpg'
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
            'http://pic.yupoo.com/yige2002/DHy6uOSj/hQBlL.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6vD5f/7Pe6S.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6xJED/Gpj5G.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6AQt3/e9O3c.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6Hj4w/NKfh2.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6LdWI/J6wX3.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6Pq4y/Eaavt.jpg'
            ,'http://pic.yupoo.com/yige2002/DHy6dQZM/L6Dvw.jpg'
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