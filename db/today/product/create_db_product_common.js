/**
 * Created by gump on 4/12/14.
 */

var category = require("./db_new_category.js");

function findCategoryId(productId)
{
	for(var j = 0; j < category.new_category.length;++j)
	{
		var cateInfo = category.new_category[j];
		for(var k = 0; k < cateInfo.product_list.length; ++k)
		{
			var productInfo = cateInfo.product_list[k];
			if(productInfo.product_id == productId)
			{
				return cateInfo.id;
			}
		}
	}
	return 0;
}

exports.create_product_db = function(mongoose, macroproduct){
    var todayCategory = mongoose.model('todayProduct');
    for(var i = 0; i < macroproduct.productarr.length - 1;++i){
		var product = macroproduct.productarr[i];
		var pid = product.pid;
		
		var newCategoryId = findCategoryId(pid);
		product.new_category_id = newCategoryId;
		if(newCategoryId == 0)
		{
			console.log("category error:" + newCategoryId + " " + pid);
		}
		
        var newCategory = new todayCategory(
            macroproduct.productarr[i]
        );
        newCategory.save( function( err, silence ) {
            if( err )
            {
                console.log(err);
            }
        });
    }
}