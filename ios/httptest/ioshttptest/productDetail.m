//
//  productDetail.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "productDetail.h"

@implementation productDetail

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=shop&a=getProductDetail&product_id=12"];
    [self testGet:strurl];
}

@end
