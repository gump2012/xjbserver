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
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"payment?assistant=getPaymentConsignee&device_id=1"];
    [self testGet:strurl];
}

@end
