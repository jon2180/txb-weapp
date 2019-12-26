# `南小淘项目`微信小程序开发规范



## 1.目录规范

### 组件文件

所有组件相关文件统一放在 components 目录下。

### 图片文件

项目图片文件放置于根目录的 images 文件夹下，组件独有的图片放在当前组件 images 目录下

### 模型文件

模型文件主要用于编写各类业务模型。项目模型文件放置于根目录的 models 文件夹下，组件相关模型放置于 components 目录下的 models 文件夹中。

### 行为文件

行为文件放在所引用的组件目录下。

## 2. WXML规范

### 2.1. 

wxml 标签可以单独出现的情况，尽量单独出现，如`<input />`。

> `<input />`

### 2.2.

控制每行HTML的代码数量在120个字符以内，方便阅读浏览，多余的代码进行换行处理，标签所带属性每个属性间可进行换行。

```wxml
<v-music
  wx:if="{{classic.type===200}}"
  img="{{classic.img}}"
  content="{{classic.content}}"
>
</v-music>
```

### 2.3.

合理展现分离内容，不要使用内联样式。

```wxml
//推荐使用
<image class="tag"></image>
```

### 2.4.

除组件外的其他块级元素，均需注释出其功能，并在其上下空出一行与其他代码进行区分。

```wxml
<view>...</view>

//导航栏
<view>...</view>

<view>...</view>
```

## 3. CSS规范

### 3.1.

在开发过程中`rpx`和`px`均可能用到，如通常情况下间距使用`rpx`，字体大小和边框等使用`px`，开发者根据实际情况而定。

```css
width: 100rpx;
font-size: 14px;
```
### 3.2.

CSS代码需有明显的代码缩进。每一个样式类之间空出一行。

```css
.v-tag {
  width: 100%;
}

.v-container {
  width: 100%;
}
```

### 3.3.

优先使用简写属性，并且同一类属性放置在一起，避免散乱。

```css
/* 使用简写属性 */
.v-image{
  margin: 0 auto;
}

/* 同一属性放在一块 */
.v-tag{
  margin-left: 10rpx;
  margin-right: 10rpx
}
```

### 3.4.

采用 flex 进行布局，禁止使用 float 以及 vertical-align。

```css
.container{
  disaplay: flex;
  flex-dirextion: row
}
```

### 3.5 .

成组的 wxss 规则之间用块状注释。请勿在代码后面直接注释。
```css
/* 修改button默认的点击态样式类 */
.button-hover {
  background-color: red;
}
```

## 4. JS规范

### 4.1. 

统一使用 ES6 标准语法

```js
// good
const data1 = ''
let data2 = ''
const obj = {
	foo() {}
}

// bad
var data1 = '';
var data2 = {
	data: function() {}
}
```

### 4.2.

语句末尾统一省略分号

```js
// good!
const arr = []

// bad
const arr = [];
```

### 4.3.

统一使用反引号 ``或单引号' ' , 不使用双引号

```js
// good
const str = 'u'

// bad
const str = ""
```

### 4.4

禁止使用 `var` 申明变量

在可能的情况下优先使用 `const` 定义

```js
// good
const str = 'u'
let arr = []

// bad
var arr = []
var str = 'u'
```

### 4.5. 命名规范

1. 变量名，函数名：小驼峰命名法
2. 类名：大驼峰命名法

函数名方法名以动词开头，动词需清晰地表示函数功能。常用的动词前缀：`on` 表示动作，`is` 表示状态，`get/fetch` 表示获取数据等等。

与界面绑定的函数以 **bind** 开头

私有函数或者属性以下划线开头表明。

```js
//定义常量
const a = 1

//定义变量
let imageContent =  res.data

//函数命名
getInfo: function(){
  return '';
}

//私有函数
_getInfo:function(){
  return '';
}
```

### 4.6.  回调函数规范

回调函数统一使用 Promise 函数的方式进行编写，回调成功的参数统一为res，错误参数为err。
```js
// promise 处理回调
let back = new Promise((resolve, reject) => {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

back.then((res) => {
  console.log('成功回调！', res);
}).catch((err) => {
  console.log('失败回调！', error);
});
```

私有函数以及回调函数统一放置在生命周期函数后。

删除 js 文件中未用到的生命周期函数，保持代码的整洁。
```js
Pages({
  data:{ },
  onLoad:function(event){ },
  _self:function(){ }
})
```

每个函数之间用一个空行分离结构。

### 4.7. 数据绑定变量定义规范

所有涉及到数据绑定的变量均需在data中初始化。禁止在不定义的情况下直接setData。
```js
Pages({
  data:{
    id : null
  },
  
  onLoad:function(event){
    let id = event.target.dataset.id
    this.data.id = id
  }
})
```
点击事件规范

点击事件函数命名方式为 on + 事件名 或者业务名。
```js
onLike: function(event){
}
```

## 5. 组件规范

### 5.1 组件名命名规范

组件在使用时命名以 “c-”为开头的组件名，若组件名称为多个单词名拼接而成，采用 ' - ' 连接。组件标签在page页面使用时推荐使用单闭合标签（此条约束对于包含有slot的组件无效）

```html
<c-movies />
```

### 5.2 触发事件规范

组件点击触发事件建议用冒号分隔开
```html
<c-component-tag-name bind:myevent="onMyEvent" />
```

## 6. 标点规范



1. WXML、CSS、JSON中均应使用双引号，js 中使用单引号。

2. CSS属性中冒号中后面用一个空格分隔开。

3. 执行一致的缩进（2个空格）

4. 执行一致的换行样式 `unix`