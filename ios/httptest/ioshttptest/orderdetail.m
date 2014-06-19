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
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=order&\
a=getOrderDetail&\
order_id=0518115907700268\
&device_id=863092020357250"];
    [self testGet:strurl];
}

@end
