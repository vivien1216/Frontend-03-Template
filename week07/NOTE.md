<!--
 * @Author: vivien
 * @Date: 2020-07-26 20:35:27
 * @Last Modified by: vivien
 * @LastEditTime: 2020-09-11 11:37:05
-->
## HTML语义
### 意义
1.语义类标签对开发者更为友好，使用语义类标签增强了可读性，即便是在没有 CSS 的时候，开发者也能够清晰地看出网页的结构，也更为便于团队的开发和维护。
2.除了对人类友好之外，语义类标签也十分适宜机器阅读。它的文字表现力丰富，更适合搜索引擎检索（SEO），也可以让搜索引擎爬虫更好地获取到更多有效信息，有效提升网页的搜索量，并且语义类还可以支持读屏软件，根据文章可以自动生成目录等等。

## 捕获与冒泡
捕获与冒泡机制来自 pointer 设备输入的处理，捕获是计算机处理输入的逻辑，冒泡是人类理解事件的思维，捕获总是在冒泡之前发生。
在我们实际监听事件时，建议这样使用冒泡和捕获机制：默认使用冒泡模式，当开发组件时，遇到需要父元素控制子元素的行为，可以使用捕获机制。

## DOM API
大致包含一下四点：
- 节点：DOM 树形结构中的节点相关 API。
- 事件：触发和监听事件相关 API。
- Range：操作文字范围相关 API。
- 遍历：遍历 DOM 需要的 API。
### 节点
- Element: 元素型节点，跟标签相对应
- Document: 文档节点
- CharacterData: 字符数据
- DocumentFragment: 文档片段
- DocumentType: 文档类型

<code>
Element: &lt;tagname&gt;...&lt;/tagname&gt;
Text: text
Comment: &lt;!-- comments --&gt;
DocumentType: &lt;!Doctype html&gt;
ProcessingInstruction: &lt;?a 1?&gt;
</code>

### Node
Node 是 DOM 树继承关系的根节点，它定义了 DOM 节点在 DOM 树上的操作，首先，Node 提供了一组属性，来表示它在 DOM 树中的关系，它们是：
- parentNode
- childNodes
- firstChild
- lastChild
- nextSiblings
- previousSiblings
从命名上，我们可以很清晰地看出，这一组属性提供了前、后、父、子关系，有了这几个属性，我们可以很方便地根据相对位置获取元素。
Node 中也提供了操作 DOM 树的 API，主要有下面几种。
- appendChild
- insertBefore
- removeChild
- replaceChild

Node中的一些高级API
- compareDocumentPosition: 用于比教两个节点中关系的函数
- contains: 检查一个节点是否包含另一个节点的函数
- isEqualNode: 检查两个节点是否完全相同
- isSameNode: 检查两个节点是否是同一个节点， 在js中可用“===”
- cloneNode: 复制一个节点，如果传入参数true,则会连同子元素做深拷贝

DOM标准还规定了节点必须从文档的create方法创建出来，不能够使用原生javascript的new运算。
- createElement
- createTextNode
- createCDATASection
- createComment
- createProcessingInstruction
- createDocumentFragment
- createDocumentType

## Element与Attribute
Element表示元素，它是node的子类。
元素对应了HTML中的标签，它既有子节点，又有属性。所以Element子类中，有一系列操作属性的方法。
我们可以把元素的 Attribute 当作字符串来看待，这样就有以下的 API：
- getAttribute
- setAttribute
- removeAttribute
- hasAttribute

## 查找元素
document 节点提供了查找元素的能力。比如有下面的几种。
- querySelector
- querySelectorAll
- getElementById
- getElementsByClassName
- getElementsByTagName
- getElementsByName
我们需要注意，getElementById、getElementsByName、getElementsByTagName、getElementsByClassName，这几个 API 的性能高于 querySelector。
而 getElementsByName、getElementsByTagName、getElementsByClassName 获取的集合并非数组，而是一个能够动态更新的集合。
