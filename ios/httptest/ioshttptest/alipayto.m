//
//  alipayto.m
//  ioshttptest
//
//  Created by gump on 5/31/14.
//  Copyright (c) 2014 gump. All rights reserved.
//

#import "alipayto.h"

@implementation alipayto

-(void)request{
    NSString *contantstr = @"order_id=1&price=0.01";
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_SECOND_URL,@"ali?assistant=alipayto"];
    [self testPost:contantstr withURL:strurl];
}

@end
