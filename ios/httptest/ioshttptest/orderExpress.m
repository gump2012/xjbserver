//
//  orderExpress.m
//  ioshttptest
//
//  Created by lishiming on 14-6-19.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "orderExpress.h"

@implementation orderExpress
-(void)request{
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?\
m=order&a=getexpress&order_id=0518115907700268"];
    [self testGet:strhttp];
}
@end
