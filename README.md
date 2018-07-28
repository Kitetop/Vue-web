# vuejs

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
# firstday

> basic learning (demo is in note directory)

## simple demo

```bash
./src/note/index.html
1.事件绑定=>@

2.属性绑定=>:

3.插值表达式=>{{data}}

4.双向绑定=>v-model

5.v-if=>DOM的存在与否
  v-show=>DOM的显示与否
  v-for=>循环显示
  
6.Vue实例元素含义

7.侦听=>watch

8.计算=>computed

todolist.html
1. 组件就是一个小的vue实例，它的里面同样可以使用data、methods属性
   父组件可以使用props把数据传递给子组件，子组件可以使用$emit触发父组件之中定义的事件
```
# vote 
 > the view for voting
 
 ```
 ./src/note/axios-login.html => 用户登录
 ./src/note/user-center.html =>用户中心
 ./src/note/showResult.html =>显示投票详情
 ./src/note/createVote.html =>发布投票
 ./src/note/addResult.html =>显示发布的投票
 ./src/note/changeResult.html =>进行投票

```
# vote version 0.9.9

###### 技术选型： vue+webpack+Element
> A less elegant way to change the rendered component

````
   在这个版本全部都是通过逻辑来控制页面来渲染使用哪个组件，没有使用vue-router这个很好用的方式，
但是在进行进一步的版本升级的时候我还是决定保留这个不太优美的实现方式，因为这种方式对于vue的基础
skill和个人的逻辑还是有着一定的提升作用的。
   实现原理：我们可以通过各种事件（当然最常用当然是点击事件啦）来改变渲染的组件，而在没有使用路
由的时候，我们等于是动态的通过加载、卸载一个组件（这些都是在一个页面上来实现的），原理图 =>
    
    *********************************
    *  ***************************  *
    *  *  nav-bar：it has some   *  *
    *  *  button，click it will  *  *
    *  *  decide the rebdered    *  *
    *  *  component              *  *
    *  ***************************  *
    *                               *
    *  ***************************  *
    *  *  In this area,you will  *  *
    *  *  watch the component    *  *
    *  * you choosing            *  *
    *  ***************************  *
    *                               *
    *********************************
    要根据这些事件来决定哪个组件被渲染，你需要对vue父子组件通信有着一定的理解，那我们现在来解析这
个原理图中的组件关系：
    1) 你可以将nav-bar这个组件看成是一个父组件，它底部显示区域就是这个父组件内部的一个标签，就和
普通的html标签一样(详细代码在 userCenter.vue 26行）；
    2）虽然和html标签一样，但是在进行解析成DOM的时候会进行不一样的处理：<component :is="currentView"/>
它会根据currentView来决定渲染哪一个组件，动态改变这个值的代码在userCenter.vue中的<script>标签内；
    3）现在虽然实现了组件的动态渲染，但是组件之间的关系不指示显示与否的关系，这时候就是要进行通信的时候了
子组件可以使用props来接受父组件传递过来的值，父组件可以监听子组件通过$emit发布的事件来产生动作，userCenter.vue 
和 createVote.vue之间是有着明确的父子组件关系的两个组件，基本的通信操作都有代码样例
    4）为什么说考验一个人的逻辑能力呢，因为组件与组件的关系是有层次的，当它的层次不止是两层的时候，那通过
频繁的发布事件接受数据这样开发是十分不科学的，而且都在一个页面上实际上也不可能这样使用（实际上局部使用还是
可以接受的）,在master分支开始使用vue-router。

````






