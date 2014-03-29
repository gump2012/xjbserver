//
//  main.m
//  texthttp
//
//  Created by lazybone on 3/4/14.
//  Copyright (c) 2014 lazybone. All rights reserved.
//

void testFun(NSString *content ,NSString *strurl)
{
    NSURL *url = [NSURL URLWithString:strurl];
    //第二步，创建请求
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc]initWithURL:url cachePolicy:NSURLRequestUseProtocolCachePolicy timeoutInterval:10];
    [request setHTTPMethod:@"POST"];//设置请求方式为POST，默认为GET
    NSData *data = [content dataUsingEncoding:NSUTF8StringEncoding];
    [request setHTTPBody:data];
    //第三步，连接服务器
    
    NSData *received = [NSURLConnection sendSynchronousRequest:request returningResponse:nil error:nil];
    
    NSString *str1 = [[NSString alloc]initWithData:received encoding:NSUTF8StringEncoding];
    
    NSLog(@"%@",str1);
}

int main(int argc, const char * argv[])
{

    @autoreleasepool {
        
        
        
        //NSURL *url = [NSURL URLWithString:@"http://115.28.225.137:10080/book/login"];
        //NSURL *url = [NSURL URLWithString:@"http://localhost:10080/book/login"];
        //NSString *str = @"{\"mail\":\"yige2002@tom.com\",\"ps\":\"111111\"}";//设置参数
        NSString *strurl = @"http://115.28.225.137:10080/order?assistant=neworder";
        NSString *strc =@"\
{\
\"city\": \"2268\",\
\"consignee\": \"李东\",\
\"mobile\": \"13646426253\",\
\"memo\": \"你好\",\
\"province\": \"2182\",\
\"ticket_id\": \"bb2dd06d40c0fd6cc8b291e8f26e7764\",\
\"token\": \"5a928f51b477a1162cf7c767b5a7dbda\",\
\"address\": \"青大纺织学院东门\",\
\"shipping_fee\": \"12.00\",\
\"promotion_totalprice\": \"22.00\",\
\"area\": \"2275\",\
\"payment_way_id\": \"1\",\
\"productlist\": [\
{\
\"title\": \"好产品\",\
\"attr_list\": [\
{\"goods_attr_id\":\"2828\",\
\"attr_price\":\"0.00\"}\
],\
\"price\": \"22\",\
\"pid\": \"325\",\
\"quantity\": \"1\"\
}\
]\
}";
        testFun(strc,strurl);
        
    }
    return 0;
}


