//
//  shopAdList.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "shopAdList.h"

@implementation shopAdList
-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"shop?assistant=getAdList"];
    [self testGet:strurl];
}
@end
