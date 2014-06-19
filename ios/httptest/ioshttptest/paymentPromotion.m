//
//  paymentPromotion.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "paymentPromotion.h"

@implementation paymentPromotion

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=payment&a=getPaymentDetail&price=99.00&province_code=21&payment_way_id=2"];
    [self testGet:strurl];
}

@end
