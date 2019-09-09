# Keyboard

一个基于vuejs的车牌键盘组件，兼容移动端和pc端。   
[原生面向对象js版车牌键盘](https://github.com/AsaZws/binding/tree/master/plate-object)    
[基于jq版车牌键盘](https://github.com/AsaZws/binding/tree/master/input1.4)    

## 必要文件和截图
keyboard文件夹是车牌键盘组件，keyboardinput是输入框组件，也可以用你们自己的input输入框，可以参考我KeyboardInput.vue组件里面的代码，添加到你们的input组件中就好了，引入的相关文件都要放入项目中的，如果苹果真机点击也想改变背景颜色的话，就需要在public文件夹里面中index.html的body加入 ontouchstart="" οnmοuseοver=""。
![](keyboard.gif)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```