
Q: 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
A: first-letter和first-line都作用于块级元素，first-letter作用于第一行的首字母，first-line作用于第一行的所有字符。
首先，我们可以看看关于css float的相关概念。
浮动：使元素脱离正常文档流，按照指定的水平方向发生移动，直到碰到父元素的边界或另一个浮动元素边框为止。
因为first-line作用于第一行的所有字符，而first-letter作用于第一行的首字母，所以first-letter可以设置float属性来使首字母脱离第一行的文档流。而对first-line如果设置了float属性，则是作用于第一行的所有字符，这是没有必要的。