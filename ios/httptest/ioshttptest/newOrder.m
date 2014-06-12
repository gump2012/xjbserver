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
json=\
{\"city_code\":\"1234\"\
,\"consignee\":\"dashabi\"\
,\"phone\":\"13646426253\"\
,\"memo\":\"\"\
,\"province_code\":\"1234\"\
,\"address\":\"jinsongsanlu\"\
,\"transport_price\":0.0\
,\"product_total_price\":0.012\
,\"area_code\":\"1234\"\
,\"payment_way_id\":2\
,\"product_list\":\
[{\"title\":\"shasha\"\
,\"price\":0.012\
,\"product_id\":1\
,\"count\":1\
,\"attr_list\":\
[{\"product_attr_id\":\"100001\"\
,\"price\":0.0\
}]}]}";
    NSString *urlstr = [NSString stringWithFormat:@"%@%@",LOCAL_URL,
                        @"order?assistant=neworder&device_id=1"];
    [self testPost:contentser withURL:urlstr];
}

@end
