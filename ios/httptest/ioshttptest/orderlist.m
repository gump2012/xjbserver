//
//  orderlist.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "orderlist.h"

@implementation orderlist

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"order?assistant=getMyOrderList&device_id=1&limit=2&page=2"];
    [self testGet:strurl];
}

@end
