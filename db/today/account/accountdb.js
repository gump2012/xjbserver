/**
 * Created by lishiming on 14-4-29.
 */

exports.createdb = function (mongoose){
    var userSchema = new mongoose.Schema({
        ticket_id     :{
            type: String,
            unique: true
        }
        ,phone              :{
            type:String
            ,unique:true
        }
        ,avatar             :String
        ,account_coin       :Number
        ,sex_type           :Number
        ,nickname           :String
        ,token              :{
            type:String
            ,unique:true
        }
        ,password           :String
        ,create_time        :String
        ,ordernumber        :Number
        ,province_code      :String
        ,city_code          :String
        ,area_code          :String
        ,address            :String
        ,address_phone      :String
        ,consignee          :String
    });

    mongoose.model('todayaccount',userSchema);
}