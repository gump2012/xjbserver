//
//  regist.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "regist.h"

@implementation regist
-(void)request{
    NSString *contantstr = @"nickname=jj&phone=13646426253&password=dajiji";
    NSString *strurl = [NSString stringWithFormat:@"%@%@",MAIN_SECOND_URL,@"reg?assistant=register&device_id=a"];
    [self testPost:contantstr withURL:strurl];
}
@end
