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
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"category?assistant=getProductsByCategory&cid=1&limit=10&page=3"];
    [self testGet:strhttp];
}

@end
