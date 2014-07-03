/**
 * Created by lishiming on 14-7-3.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

exports.getExperienceHtml = function (response,request){

    var pid = publictool.getpid(request);

    var detailmodel = mongoose.model('todayProduct');
    detailmodel.findOne({pid:pid},function(err,doc){
        if(doc){
            var strhtml = '<meta name=\'viewport\' content=\'width=device-width\'/>' +
                '<script type=\'text/javascript\'>function resize(image)' +
                '{var oldwidth = image.clientWidth;' +
                'var oldheight = image.clientHeight;' +
                'if(image.clientWidth>document.body.clientWidth)' +
                '{image.style[\'width\'] = document.body.clientWidth + \'px\';' +
                'image.style[\'height\'] =document.body.clientWidth/oldwidth*oldheight + \'px\';' +
                'image.style[\'margin\'] = 0;' +
                'document.body.style[\'margin\'] = 0;}' +
                'else if(image.clientWidth<document.body.clientWidth/2)' +
                '{image.style[\'width\'] = document.body.clientWidth/2 + \'px\';' +
                'image.style[\'height\'] =document.body.clientWidth/(2*oldwidth)*oldheight + \'px\';}}</script>' +
                '<div style="text-align:center;">\r\n\t';

            for(var i = 0; i < doc.detailpics.length - 1;++i){
                var strimgae = '<img src="' + doc.detailpics[i] + '" onload="resize(this);" />';
                strhtml += strimgae;
            }
            strhtml += '<img src="http://pic.yupoo.com/yige2002/DRIiuVsf/RIL74.png" onload="resize(this);" />';
            strhtml += '<img src="http://pic.yupoo.com/yige2002/DRIivDlA/Uri17.png" onload="resize(this);" />';
            strhtml += '<img src="http://pic.yupoo.com/yige2002/DRIivOEa/VJPAj.png" onload="resize(this);" />';

            strhtml +=' \r\n</div>';
            var responsevalue = {
                info: {
                    extra: null,
                    data: {
                        content: strhtml
                    }
                },
                response_status: "true",
                msg: ""
            }

            publictool.returnValue(response,responsevalue);
        }
        else{
            publictool.returnErr(response,'没有商品'+pid+'的数据');
        }
    });
}