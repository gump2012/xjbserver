/**
 * Created by lishiming on 14-8-7.
 */
exports.createdb = function createdb(mongoose){
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
        ,order_id               :{
            type: String,
            unique: true
        }
        ,creat_time             :String
        ,order_states           :Number
        ,payment_states         :Number
        ,shipping_states        :Number
        ,goods_number           :Number
        ,payment_name           :String
        ,express_number         :String
        ,express_name           :String
        ,channel                :String //渠道
        ,productlist            :[mongoose.Schema.Types.Mixed]
    });

    mongoose.model('todayDeleteOrder',userSchema);
}