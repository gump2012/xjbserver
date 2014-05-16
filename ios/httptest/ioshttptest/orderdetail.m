//
//  orderdetail.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "orderdetail.h"

@implementation orderdetail

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"order?\
assistant=getMyOrderDetail&order_id=1823bd6be3c384e97dd85ba1b416398d&device_id=1"];
    [self testGet:strurl];
}

@end
