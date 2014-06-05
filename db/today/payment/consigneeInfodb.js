/**
 * Created by gump on 3/26/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        token                 :{
            type: String,
            unique: true
        }
        ,ticket_id            :String
        ,consignee            :String
        ,address              :String
        ,mobile               :String
        ,baseaddr             :String
        ,province             :String
        ,city                 :String
        ,area                 :String
        ,ordernumber          :Number
        ,create_time          :String
    });

    mongoose.model('todayConsigneeInfo',userSchema);
}

exports.createdb = createdb;