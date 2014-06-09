//
//  deleteOrder.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "deleteOrder.h"

@implementation deleteOrder

-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_SECOND_URL,@"order?assistant=delMyOrder&order_id=0509161307146970"];
    [self testGet:strurl];
}

@end
