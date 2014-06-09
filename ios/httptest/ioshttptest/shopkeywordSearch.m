//
//  shopkeywordSearch.m
//  ioshttptest
//
//  Created by lishiming on 14-5-16.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#import "shopkeywordSearch.h"

@implementation NSString (EncodingUTF8Additions)
-(NSString *)URLEncodingUTF8String{
    NSString *result = (NSString *)CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,
                                                                                             (CFStringRef)self,
                                                                                             NULL,
                                                                                             CFSTR("!*'();:@&=+$,/?%#[]"),
                                                                                             kCFStringEncodingUTF8));
    return result;
}
@end

@implementation shopkeywordSearch


-(void)request{
    NSString *strurl = [NSString stringWithFormat:@"%@shop?assistant=keywordSearch&keyword=%@&count=10&page=1",
                        MAIN_SECOND_URL,
                        [@"娃娃" URLEncodingUTF8String]];
    [self testGet:strurl];
}
@end
