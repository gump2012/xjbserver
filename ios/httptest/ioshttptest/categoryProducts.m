//
//  categoryProducts.m
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "categoryProducts.h"

@implementation categoryProducts

-(void)request{
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=category&a=getCategoryProductList&category_id=1&count=10&page=2"];
    [self testGet:strhttp];
}

@end
