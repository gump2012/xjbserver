//
//  alipayreturn.m
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "alipayreturn.h"

@implementation alipayreturn

-(void)request{
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"alipay"];
    [self testGet:strhttp];
}

@end
