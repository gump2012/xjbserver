/**
 * Created by lishiming on 14-3-28.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        city                    :String
        ,province               :String
        ,area                   :String
        ,consignee              :String
        ,mobile                 :String
        ,memo                   :String
        ,ticket_id              :String
        ,token                  :String
        ,address                :String
        ,shipping_fee           :Number
        ,promotion_totalprice   :Number
        ,payment_way_id         :Number
        ,order_id               :String
        ,creat_time             :Date
        ,order_states           :Number
        ,payment_states         :Number
        ,shipping_states        :Number
        ,productlist            :[mongoose.Schema.Types.Mixed]
    });

    mongoose.model('todayOrder',userSchema);
}

exports.createdb = createdb;