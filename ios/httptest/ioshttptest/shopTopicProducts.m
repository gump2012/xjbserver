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
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"shop?assistant=getTopicProducts&limit=10&page=1&topicid=1"];
    [self testGet:strurl];
}
@end
