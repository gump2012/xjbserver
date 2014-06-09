//
//  accountGetInfo.m
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "accountGetInfo.h"

@implementation accountGetInfo

-(void)request{
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_SECOND_URL,@"account?\
assistant=getAccountInfoByUser&regist_id=33b5c4c273f7fbf390a9163232c160e2"];
    [self testGet:strhttp];
}

@end
