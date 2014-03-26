/**
 * Created by gump on 3/26/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        token                 :String
        ,consignee            :String
        ,address              :String
        ,mobile               :String
        ,baseaddr             :String
    });

    mongoose.model('todayConsigneeInfo',userSchema);
}

exports.createdb = createdb;