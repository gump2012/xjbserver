//
//  shopTopicProducts.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "shopTopicProducts.h"

@implementation shopTopicProducts
-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=shop&a=getTopicProductList&count=10&page=1&topic_id=1"];
    [self testGet:strurl];
}
@end
