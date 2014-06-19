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
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=order&a=getOrderList&device_id=9527&count=10&page=1"];
    [self testGet:strurl];
}

@end
