//
//  categoryList.m
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "categoryList.h"

@implementation categoryList

-(void)request{
    NSString *strhttp = [NSString stringWithFormat:@"%@%@",MAIN_URL,@"?m=category&a=getCategoryList"];
    [self testGet:strhttp];
}

@end
