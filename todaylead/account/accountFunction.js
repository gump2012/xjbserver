/**
 * Created by lishiming on 14-6-6.
 */

var mongoose = require('mongoose');

exports.saveUser = function(uservalue){

    var Consigneemodel = mongoose.model('todayConsigneeInfo');
    Consigneemodel.findOne({token:uservalue.token},function(err,doc){
        if(doc){
            uservalue.province_code = doc.province;
            uservalue.city_code = doc.city;
            uservalue.area_code = doc.area;
            uservalue.address = doc.baseaddr;
            uservalue.address_phone  = doc.mobile;
            uservalue.consignee = doc.consignee;

            var accountmodel = mongoose.model('todayaccount');
            var newAccount = new accountmodel(uservalue);
            newAccount.save( function( err, silence ) {
                if( err )
                {
                    console.log(err);
                }
            });
        }
        else{
            var accountmodel = mongoose.model('todayaccount');
            var newAccount = new accountmodel(uservalue);
            newAccount.save( function( err, silence ) {
                if( err )
                {
                    console.log(err);
                }
            });

            var devicevalue = {
                token                 :uservalue.token
                ,ticket_id            :uservalue.ticket_id
                ,consignee            :''
                ,address              :''
                ,mobile               :''
                ,baseaddr             :''
                ,province             :''
                ,city                 :''
                ,area                 :''
                ,ordernumber          :0
                ,create_time          :Date.now().toString()
            }
            saveDevice(devicevalue);
        }
    });
}

function saveDevice(devicevalue){
    var Consigneemodel = mongoose.model('todayConsigneeInfo');
    var newAccount = new Consigneemodel(devicevalue);

    newAccount.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.saveDevice = saveDevice;