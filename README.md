# 搭建前端的CMS项目开发环境
基于webpack的一款前端开发框架



1. 安装 yarn

   ```
   npm install yarn -g
   ```

2. 安装依赖包

   ```
   yarn
   ```

3. 安装webpack

   ```
   选用webpack作为工程化工具，webpack是一个基于配置的前端模块化打包工具。
   
   需要先去下载webpack  
   
   全局安装了webpack，执行命令的时候就可以直接webpack来执行了，如果全局没有装，只在本地装包，只能执行./node_modules/bin/webpack ...
   
   为了使用更方便，一般会全局安装，webpack目前版本为4.X，需要搭配webpack-cli使用
   
   在本地也需要安装 webpack
   
   ```

   

#### webpack的使用

可以直接通过webpack命令来执行打包操作，通过 --env来配置一些参数

webpack的基本命令：

--help 查看所有的命令

--mode development production none

-o 配置出口

--config 配置 配置文件

一般都是通过配置文件来进行使用：

webpack默认会根据webpack.config.js中的配置进行模块化打包

#### 插件Plugin

plugin是解决loader做不了的事情的，现在准备让html页面出现在输出目录中

使用 html-webpack-plugin

插件和入口出口一样需要直接在配置文件中进行配置,在其中放入插件的实例就相当于在使用插件

copy-webpack-plugin 可以将文件进行复制

#### dev server

我们使用webpack-dev-server工具来替代webpack，在启动的时候就会开启热更新服务

> 其实工程化工具不止gulp/webpack/grunt，还有很多，比如parcel， rollup

### css/scss/...等文件的处理

在开发的时候可以在js文件中引入css/scss文件，但是我们需要使用loader来处理

css-loader 可以将引入到js中的css模块中的代码放入到js中

style-loader 可以将js中的css代码放入到style标签中去

sass-loader  可以将sass代码编译成css代码

针对图片，我们直接将图片打包（复制）到输出目录，直接引入，也可以模块化使用

url-loader 基于file-loader，专业处理图片，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。

babel-loader 编译ES高级语法

### 环境中将 es6 代码编译成 es5

babel 是一个专业编译js的工具 例如 es6/7/8 -> ES5; typescript => javascript ; coffeescript => javascript ....

如果是再gulp里使用babel，可能需要装gulp-babel , 我们再项目中对js管理使用的是webpack，所以需要安装webpack中的babel工具： babel-loader

> webpack中编译各种文件/各种代码用的工具叫loader...

npm install -D babel-loader @babel/core @babel/preset-env

光装上面的不够，因为我们还使用了更高级js语法，所以还得装

npm install @babel/runtime

npm install -D @babel/plugin-transform-runtime

还有问题，原因是因为 代码中出现了commondJS规范，模块化也必须使用ES6 modules。

### 使用Better-scroll来实现首页的区域滚动与上下拉刷新

我们再开发中经常会使用一些区域滚动插件来优化我们的页面滚动效果（加一些反弹效果。。。）

这样的插件我们以前用的最多的是Iscroll，现在用的最多的是better-scroll

具体使用请查看[文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#%E8%B5%B7%E6%AD%A5)

1. 注意，better-scroll的容器中只有第一个子元素才能进行滚动
2. 保证better-scroll的容器的尺寸是小于里面内容的长度的
3. 当容器内内容区域高度变化之后，一定要让bscroll重新计算