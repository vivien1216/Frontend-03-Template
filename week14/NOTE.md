<!--
 * @Author: vivien
 * @Date: 2020-07-26 20:35:27
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-01 12:24:20
-->
学习笔记

## setInterval() setTimeout() window.requestAnimationFrame()
setInterval()重复调用，除非使用clearInterval()清除
setTimeout()在指定时间内调用一次，可以调用自身达到setInterval()的效果
window.requestAnimationFrame()告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

## Symbol的使用
在声明变量时，使用Symbol，可以避免与其他属性名产生冲突

## 手势与动画的代码练习