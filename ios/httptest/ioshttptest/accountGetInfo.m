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
assistant=getAccountInfoByUser&user_id=d9de20976437207d1275c6f2dcf7c13e"];
    [self testGet:strhttp];
}

@end
