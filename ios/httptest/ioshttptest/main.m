//
//  main.m
//  ioshttptest
//
//  Created by lishiming on 14-5-15.
//  Copyright (c) 2014年 lishiming. All rights reserved.
//
#import "categoryList.h"
#import "categoryProducts.h"
#import "accountGetInfo.h"
#import "alipayreturn.h"

int main(int argc, const char * argv[])
{
    @autoreleasepool {
        BaseHttpRequest *testres = [[alipayreturn alloc] init];
        [testres request];
    }
    return 0;
}

