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
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=order&a=delOrder&order_id=0519102824424699"];
    [self testGet:strurl];
}

@end
