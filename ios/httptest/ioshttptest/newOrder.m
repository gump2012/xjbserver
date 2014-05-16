//
//  newOrder.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "newOrder.h"

@implementation newOrder

-(void)request{
    NSString *contentser = @"\
order_json=\
{\"city\":\"1234\"\
,\"consignee\":\"dashabi\"\
,\"mobile\":\"13646426253\"\
,\"memo\":\"\"\
,\"province\":\"1234\"\
,\"address\":\"jinsongsanlu\"\
,\"shipping_fee\":12.0\
,\"promotion_totalprice\":18.00\
,\"area\":\"1234\"\
,\"payment_way_id\":2\
,\"productlist\":\
[{\"title\":\"shasha\"\
,\"price\":18.00\
,\"pid\":1\
,\"quantity\":1\
,\"attr_list\":\
[{\"goods_attr_id\":\"100001\"\
,\"attr_price\":0.0\
}]}]}";
    NSString *urlstr = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"order?assistant=neworder&device_id=1"];
    [self testPost:contentser withURL:urlstr];
}

@end
