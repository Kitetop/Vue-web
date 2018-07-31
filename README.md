# vuejs

> A Vue.js project

## Build Setup

``` bash
# git clone this project
git clone xxxxxxx

# go to the directory you clone
cd Vue-web
# install dependencies,before this you should install Node.js environment if you do not have
npm install

# serve with hot reload at localhost:8080
npm run dev

# by doing this, type in your browser http://localhost:8080,you will see the project view
```

# vote first version

 > the view for voting
 
###### 技术选型: vue.js+Boostrap+Axios
 ```
 ./src/note/axios-login.html => 用户登录
 ./src/note/user-center.html =>用户中心
 ./src/note/showResult.html =>显示投票详情
 ./src/note/createVote.html =>发布投票
 ./src/note/addResult.html =>显示发布的投票
 ./src/note/changeResult.html =>进行投票
 ```
# vote version 1

> Practical demo

###### 技术选型: vue.js+Element+Axios+Webpack
````
目录结构：
├── README.md                       // 项目说明文档
├── node_modules                    // 项目依赖包文件夹
├── build                           // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── dist                   //npm run build 之后的打包文件夹，如果你有服务器直接把该文件夹放置到服务器www目录下访问index.html就可以访问整个项目了
|   ├── index.html
|   ├── static
├── config                          // 项目基本设置文件夹
│   ├── dev.env.js              // 开发配置文件
│   ├── index.js                    // 配置主文件
│   └── prod.env.js             // 编译配置文件
├── index.html                      // 项目入口文件
├── package-lock.json           // npm5 新增文件，优化性能
├── package.json                    // 项目依赖包配置文件
├── src                             // 我们的项目的源码编写文件
│   ├── App.vue                 // APP入口文件
|   ├── apiRouter.js         //配置文件，设置api的根目录 
│   ├── assets                      // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components              // 组件目录
│   │   └── Hello.vue           // 测试组件，回头删除
│   ├── main.js                 // 主配置文件
│   └── router                      // 路由配置文件夹
│       └── index.js            // 路由配置文件
└── static                          // 资源放置目录
所有的业务代码都放置在src文件夹下，这也是我们主要的工作目录，具体的目录结构可以自己设计
 
 ./src/pages/createVote => 创建投票组件
 ./src/pages/myVotes => 显示自己创建投票组件
 ./src/pages/starVote => 显示全部投票组件
 ./src/pages/userCenter => 用户中心组件，上诉三个组件的父组件
 ./src/pages/showResult => 显示结果组件，通过点击myVotes组件内查看详情按钮加载
 ./src/pages/myLogin => 用户登录组件
 ./src/pages/addResult => 增加投票结果组件
 
````
> 待改进问题

````
1. 登录逻辑不合理，可以绕过登录而直接进入到用户中心界面
2. 没有表单验证，需要对用户输入进行甄别验证，阻止非法输入发送HTTP请求给服务器造成负担
3. 没有删除操作，需要增加删除接口以及用户的注销

````