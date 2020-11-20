# 02 纯JS、CSS时钟 

> @author Rhodri Cheung

## 实现效果

实现效果如动图；（https://cl.ly/0y1C2T1z3p2R/Screen%20recording%202016-12-23%20at%2012.30.25%20PM.gif）

文档中已经给出了 HTML 结构，表盘内有三个 `div` 对应三个指针。只需要添加一些 CSS 效果，然后用 JavaScript 动态更新指针的状态即可。

## 关键要点

1.表盘上的指针的样式：旋转的效果
2.获取实时的时间
3.每一秒改变一次指针的状态

**涉及到的特性：**
- `transform-origin`
- `transform: rotate()`
- `transition`
- `transition-timing-function: cubic-bezier(x, x, x, x)`
- `setInterval(callback, time)`
- `new Date()`

