//
//  productHtml.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "productHtml.h"

@implementation productHtml
-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@%@",LOCAL_URL,@"product?assistant=getProductIntroHtml&pid=12"];
    [self testGet:strurl];
}
@end