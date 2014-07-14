/**
 * Created by lishiming on 14-3-26.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        payment_way_id        :{
            type: Number,
            unique: true
        }
        ,payment_way_name     :String
        ,payment_way_desp     :String
    });

    mongoose.model('todayPaymentList',userSchema);

    var todayCategory = mongoose.model('todayPaymentList');

    todayCategory.remove({}, function(err) {
    });

    newCategory = new todayCategory({payment_way_id:2
        ,payment_way_name:'支付宝'
        ,payment_way_desp:'满100包邮'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({payment_way_id:1
        ,payment_way_name:'货到付款'
        ,payment_way_desp:'满168包邮'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;