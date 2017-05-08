# README
----
## INFO

        npm install 
        
        npm start
        
   uri:
   
        /api
        GET /testapi

        GET /api/products
        POST /api/products
        DELETE /api/products/:id
        
        POST /api/signin
        GET /api/getSignInUser
        
        /index
        /
        
        /sign
        GET /signin
        POST /signin
        GET /signout
        
        
   test restful api
   test web socket
   
   [see](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501549492cdf5d4013db14fa9ad8ca172f0664345000)


----
## log

### 20170508

1. 添加 session

    const session = require('koa-session2');
    const Store = require("./Store.js");
    
    客户端必须支持 cookies， 如果不支持，不能登入， 检测不到状态； 现在还没找到更好的办法
    
----

by jack wang

09/04/2017 11:12 PM
