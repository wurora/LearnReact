# 第一章：React入门



## 1.1. 简介

### 1.1.1. 官网

1. 英文官网：https://reactjs.org/
2. 中文官网：https://react.docschina.org/



### 1.1.2. 介绍描述

1. 用于动态构建用户界面的JavaScript库(只关注视图)
2. 由fackbook开源



### 1.1.3. React的特点

1. 声明式编码
2. 组件化编码
3. React Native编写原生应用
4. 高效(优秀的Diffing算法)



### 1.1.4. React高效的原因

1. 使用虚拟(virtual)DOM不总是直接操作页面真是DOM
2. DOM Diffing算法，最小化页面重绘



## 1.2. React的基本使用

### 1.2.1. 效果

文件路径：my_projects\react_basic\01-hello_react\hello_react.html



### 1.2.2. 相关js库

1. react.js: React 核心库
2. react-dom.js: 提供操作DOM的react扩展库
3. babel.min.js: 解析JSX语法转为JS代码的库



### 1.2.3. 创建虚拟DOM的两种方式

1. 纯 JS 方式(一般不用)
2. JSX 方式(相当于用JS方式的语法糖，使用非常便利)
3. 文件路径：my_projects\react_basic\02-虚拟DOM的两种创建方式



### 1.2.4. 虚拟DOM与真实DOM

路径：my_projects\react_basic\02-虚拟DOM的两种创建方式\3-虚拟DOM与真实DOM.html



## 1.3. React JSX

### 1.3.1. 语法规则

1. 定义虚拟DOM时，不要写引号。
2. 标签中混入JS表达式时要用{}
3. 样式的类名指定用className
4. 内联样式要用style={{key:value}}的形式写
5. 虚拟DOM 只有一个根标签
6. 标签必须闭合
7. 标签首字母：
   - 若小写字母开头，则认为是html同名元素，若html中无该标签对应的同名元素，则报错
   - 若大写字母开头，react去渲染对应的组件，若组件没有定义，则报错



路径：my_projects\react_basic\03-jsx语法规则\jsx语法规则.html



### 1.3.2. JSX

1. 全称：JavaScript XML
2. react定义的一种类似于XML的JS扩展语法：JS + XML
3. 本质是React.createElement(component, props, ...children) 方法的语法糖
4. 作用：简化创建虚拟DOM
   - 写法：var ele = <h1>Hello JSX!</h1>
   - 注意1：不是字符串，也不是 HTML/XML 标签
   - 注意2：最终产生的是一个 JS 对象
5. 标签名任意：HTML 标签或其他标签



### 1.3.3. 渲染虚拟DOM(元素)



### 1.3.4. JSX练习



## 1.4. 模块与组件化与组件化的理解

### 1.4.1. 模块

1. 理解：向外提供特定功能的 js 程序，一般就是一个 js 文件
2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂
3. 作用：复用js，简化 js 的编写，提高 js 运行效率



### 1.4.2. 组件

1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image 等等)
2. 为什么：一个界面的功能更复杂
3. 作用：复用编码，简化项目编码，提高运行效率



### 1.4.3. 模块化

当应用的js 都以模块来编写的，这个应用就是一个模块化的应用



### 1.4.4. 组件化

当应用是以多组件的方式来实现，这个应用就是一个组件化的应用





# 第二章：React面向组件编程

## 2.1. 基本理解和使用

### 2.1.1. 函数式组件

路径：my_projects\react_basic\05-react中定义组件\1-函数式组件.html

#### 执行了ReactDOM.render之后，发生了什么？

1. React解析组件标签，找到了Demo组件
2. 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中



### 2.1.2. 类式组件

路径：my_projects\react_basic\05-react中定义组件\2-类式组件.html

#### 创建要求

1. 不一定要有构造器
2. 必须有render()
3. 必须继承React.Component

#### 执行了ReactDOM.render之后，发生了什么？

1. React解析组件标签，找到了Demo组件
2. 发现组件是使用类定义的，随后new一个实例，并通过该实例调用原型的render
3. 把render返回的虚拟DOM转为真实DOM，展示在页面中



## 2.2. 组件实例的三大属性1：state

### 2.2.1. 效果

路径：my_projects\react_basic\06-组件实例三大属性1-state



### 2.2.2. 理解

1. state是组件对象最重要的属性，值是对象(可以包含多个key-value的组合)
2. 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示(重新渲染组件)



### 2.2.3. 强烈注意

1. 组件中render方法中的this为组件实例对象
2. 组件自定义的方法中this为undefined，如何解决？
   - 强制绑定this：通过函数对象的bind()
   - 箭头函数
3. 状态数据，不能直接修改或更新，要用setState



## 2.3. 组件三大核心属性2：props

### 2.3.1. 效果

路径：my_projects\react_basic\07-组件实例三大属性2-props



### 2.3.2. 理解

1. 每个组件对象都会有props(properties的简写)属性
2. 组件标签的所有属性都保存在props中



### 2.3.3. 作用

1. 通过标签属性从组件外向组件内传递变化的数据
2. 注意：组件内部不要修改props数据，



## 2.4. 组件三大核心属性3：refs与事件处理

### 2.4.4. 事件处理

1. 通过onXxx属性指定事件处理函数(注意大小写)
   - React使用的是自定义(合成)事件，不是使用的原生DOM事件
   - React中的事件时通过事件委托方式处理的(委托给组件最外层的元素)
2. 通过event.target得到发生事件的DOM元素对象





## 2.5. 收集表单数据

### 2.5.2. 理解

包含表单的组件分类

- 受控组件
- 非受控组件



## 2.6. 组件生命周期

### 2.6.2. 理解

1. 组件从创建到死亡它会经历一些特定的阶段
2. React 组件中包含一系列钩子函数(生命周期回调函数)，在特定时刻调用
3. 在定义组件时，会在特定的生命周期回调函数中做特定的工作



### 2.6.3. 生命周期图(旧)

![react生命周期(旧)](D:\vsCodeProjects\LearnReact\尚硅谷React全家桶教程\react全家桶资料\react全家桶资料\02_原理图\react生命周期(旧).png)

生命周期的三个阶段（旧）

1. 初始化阶段：由ReactDOM.render()触发--初次渲染
   1. constructor()
   2. componentWillMount()
   3. render()
   4. componentDidMount()====>常用：初始化，例如：开启定时器、发送网络请求、订阅消息
2. 更新阶段：由组件内部 this.setState()或父组件重新render 触发
   1. shouldComponentUpadte()
   2. componentWillUpdate()
   3. render()====> 必须
   4. componentDidUpdate()
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
   1. componentWillUnmount()====>常用：收尾



### 2.6.4. 生命周期(新)

![react生命周期(新)](D:\vsCodeProjects\LearnReact\尚硅谷React全家桶教程\react全家桶资料\react全家桶资料\02_原理图\react生命周期(新).png)



## 2.7. 虚拟DOM与DOM Diff算法

### 经典面试题：

1. react/vue中的key有什么作用？(key的内部原理是什么？)

   1. 简单的说：key是虚拟DOM对象的标识，在更新显示的时候key起着极其重要的作用

   2. 详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

      - 旧虚拟DOM中找到了和新虚拟DOM相同的key：

        1. 若虚拟DOM中内容没变，复用
        2. 若内容改变，生成新的并替换

      - 旧DOM中没有找到与新DOM相同的key：

        根据数据创建新的真实DOM，随后渲染到页面

        

2. 为什么遍历列表时，key最好不要用index？

   1. 若对数据进行：逆序增加、逆序删除等破坏顺序操作：

      会产生没有必要的真实DOM更新

   2. 如果结构中还包含输入类的DOM：

      会产生错误DOM更新===>界面有问题

   3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，则用index没有问题

3. 开发中如何选择key？

   1. 最好使用每条数据的唯一标识符作为key，比如id、手机号、身份证等
   2. 如果只是简单的展示数据，用index也可以



# 第三章：react应用(基于react脚手架)

## 3.1. 使用create-react-app 创建react应用

### 3.1.1. react脚手架

1. xxx脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目
   1. 包含了所有需要的配置（语法检查、jsx编译、devServer...）
   2. 下载好了所有相关的依赖
   3. 可以直接运行一个简单效果
2. react 提供了一个用于创建react项目的脚手架库：create-react-app
3. 项目的整体技术架构为：react + webpack +es6+eslint
4. 使用脚手架开发的项目的特点：模块化、组件化、工程化



### 3.1.2. 创建项目并启动

**第一步**，全局安装 npm install -g create-react-app

**第二步**，切换到想创项目的目录，使用命令：create-react-app hello-react

**第三步**，进入项目文件夹：cd hello-react

**第四步**，启动项目：npm start



### 3.1.4. 功能界面的组件化编码流程

1. 拆分组件：拆分界面，抽取组件
2. 实现静态组件：使用组件实现静态页面效果
3. 实现动态组件
   1. 动态显示初始化数据
      1. 数据类型
      2. 数据名称
      3. 保存在哪个组件
   2. 交互(从绑定事件监听开始)



## 3.2. todoList案例

### 相关知识点

1. 拆分组件、实现静态组件，注意：className, style的写法
2. 动态初始化列表。如何确定将数据放在哪个组件的state中？
   - 某个组件使用：放在其自身的state中
   - 某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
3. 关于父子之间通信：
   1. 【父组件】给【子组件】传递数据：通过props
   2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
4. 注意defaultChecked和checked的区别。类似的还有defaultValue和value
5. 状态在哪里，操作状态的方法就在哪里



# 第四章：react ajax

## 4.1. 理解

### 4.1.1. 前置说明

1. React本身只关注于界面，并不包含发送ajax请求的代码
2. 前端应用需要通过ajax请求与后台进行交互(json数据)
3. react应用需要集成第三方ajax库(或自己封装)



### 4.1.2. 常用的ajax请求库

1. jQuery：比较重，如果需要另外引入不建议使用
2. axios：轻量级，建议使用
   1. 封装XmlHttpRequest对象的ajax
   2. promise风格
   3. 可以用在浏览器和node服务器端



## 4.2. axios

### 4.1.1. github搜索案例相关知识点

1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑气你供求失败怎么办

2. ES6小知识点：结构赋值+重命名

   ```js
   let obj = {a:{b:c}}
   const {a} = obj; // 传统解构赋值
   const {a:{b}} = obj; // 连续解构赋值
   const {a:{b:newName}} = obj; // 连续结构赋值+重命名
   ```

3. 消息订阅与发布机制

   1. 先订阅，再发布（理解：有一种隔空对话的感觉）
   2. 适用于任意组件间通信
   3. 要在组件的componentWillUnmount中取消订阅

4. fetch发送请求（关注分离的设计思想）

   ```js
   try {
   	const response = await fetch(`api1/search/users2?q=${keyWord}`);
   	const data = await response.json();
   	console.log(data);
   } catch (e) {
   	console.log('请求出错', e);
   }
   ```

   



# 第五章：react-router



# 第六章：react UI组件库



# 第七章：redux
