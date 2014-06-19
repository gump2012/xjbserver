//
//  paymentList.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "paymentList.h"

@implementation paymentList

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=payment&a=getPaymentList"];
    [self testGet:strurl];
}

@end
