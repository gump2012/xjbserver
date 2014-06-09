//
//  BaseHttpRequest.h
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//

#define MAIN_URL    @"http://115.28.225.137:10080/"
#define LOCAL_URL   @"http://127.0.0.1:10080/"
#define MAIN_SECOND_URL @"http://182.92.80.203:10080/"

@interface BaseHttpRequest : NSObject 

-(void)request;
-(void)testPost:(NSString *)content withURL:(NSString *)strurl;
-(void)testGet:(NSString *)strurl;

@end
