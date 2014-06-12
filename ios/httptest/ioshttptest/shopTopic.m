//
//  shopTopic.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "shopTopic.h"

@implementation shopTopic
-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"shop?assistant=getTopicList"];
    [self testGet:strurl];
}
@end
