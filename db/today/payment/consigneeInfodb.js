/**
 * Created by gump on 3/26/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        token                 :{
            type: String,
            unique: true
        }
        ,consignee            :String
        ,address              :String
        ,mobile               :String
        ,baseaddr             :String
    });

    mongoose.model('todayConsigneeInfo',userSchema);
}

exports.createdb = createdb;