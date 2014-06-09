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
#import "login.h"
#import "newOrder.h"
#import "deleteOrder.h"
#import "orderlist.h"
#import "orderdetail.h"
#import "paymentConsigneeInfo.h"
#import "paymentList.h"
#import "paymentProductsDetail.h"
#import "paymentPromotion.h"
#import "productDetail.h"
#import "productHtml.h"
#import "regist.h"
#import "shopAdList.h"
#import "shopRecommend.h"
#import "shopkeywordSearch.h"
#import "shopTopic.h"
#import "shopTopicProducts.h"
#import "alipayto.h"

int main(int argc, const char * argv[])
{
    @autoreleasepool {
        BaseHttpRequest *testres = [[accountGetInfo alloc] init];
        [testres request];
    }
    return 0;
}

