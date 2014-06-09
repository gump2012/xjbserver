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
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_SECOND_URL,@"order?assistant=delMyOrder&order_id=34da4097c2473f8aefed92dd6423834c"];
    [self testGet:strurl];
}

@end
