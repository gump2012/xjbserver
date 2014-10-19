/**
 * Created by gump on 10/5/14.
 */
exports.createdb = function(mongoose){
    var userSchema = new mongoose.Schema({
        token                 :String
        ,product_id           :String
        ,is_activity          :Number
        ,activity_type        :Number
        ,quantity             :Number
        ,title                :String
        ,pic_url              :String
        ,price                :Number
        ,status               :Number
        ,tag                  :String
        ,invalid_time         :String
        ,referral_code        :String
        ,attr_list            :[mongoose.Schema.Types.Mixed]
    });

    mongoose.model('cartList',userSchema);
}