# 03 CSS Variable

> author Rhodri Cheung

## 实现效果

用JavaScript和CSS3实现拖动滑块时，实现调整图片的内边距、模糊度、背景颜色，同时标题中的JS两字的颜色也随图片背景颜色而变化。 

## 涉及特性

- [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
- `var(--xxx)`：CSS 变量（[CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)）
- `filter: blur()`
- 事件 `change`、`mousemove`

## 过程指南

### CSS 部分准备

1. 声明全局（`:root`）的 CSS 变量
2. 将变量应用到页面中对应元素 `<img>` 
3. 处理标题的 CSS 值

### JS 实时更新 CSS 值
1. 获取页面中 `input` 元素
2. 给每个 `input` 添加监听事件，使其在值变动，触发更新操作
3. 同 2 ，添加鼠标滑过时的事件监听
4. 编写处理更新操作的方法
	1.  获取参数值后缀
	- 获取参数名（blur、spacing、color）
	- 获取参数值（12px、#efefef）
	- 赋值给对应的 CSS 变量
