//
//  shopRecommend.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "shopRecommend.h"

@implementation shopRecommend
-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?m=shop&a=getPromotionList"];
    [self testGet:strurl];
}
@end
