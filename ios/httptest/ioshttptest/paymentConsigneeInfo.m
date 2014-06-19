//
//  paymentConsigneeInfo.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "paymentConsigneeInfo.h"

@implementation paymentConsigneeInfo

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=payment&a=getPaymentConsignee&device_id=863092020357250"];
    [self testGet:strurl];
}

@end
