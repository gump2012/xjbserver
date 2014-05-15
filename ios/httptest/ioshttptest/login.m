//
//  login.m
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "login.h"

@implementation login

-(void)request{
    NSString *strcontent = @"phone=13661633124&password=b";
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"login?assistant=login"];
    [self testPost:strcontent withURL:strhttp];
}

@end
