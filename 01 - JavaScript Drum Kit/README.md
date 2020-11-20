# 01 JavaScript Drum Kit

>author ：Rhodri Cheung

## 实现效果

模拟一个打鼓的页面。通过在键盘上按下 ASDFGHJKL 这几个键时，页面上与字母对应的按钮变大变亮，对应beat box声音响起来。

## 关键要点

1、键盘事件
2、播放声音
3、改变样式

## 难点

在完成测试阶段发现，当长按按键时，由于每个按键都绑定了“transitionend”事件，移除“playing”的类，由于长按使按键处于一直按下状态，使“div”一直是“playing”的激活激活状态，导致最后“keyup”没有进入“transitionend”事件，没法移除“playing”类。最终解决方法：给按键绑定“keyup”事件，给长按按键移除“playing”类，恢复正常。
