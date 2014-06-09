//
//  paymentProductsDetail.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "paymentProductsDetail.h"

@implementation paymentProductsDetail
-(void)request{
    NSString *contentstr = @"product_id_list=1,2,3";
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_SECOND_URL,@"payment?assistant=getProductsDetail"];
    [self testPost:contentstr withURL:strurl];
}
@end
