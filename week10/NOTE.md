<!--
 * @Author: vivien
 * @Date: 2020-07-26 20:35:27
 * @Last Modified by: vivien
 * @LastEditTime: 2020-10-02 12:21:39
-->
## 四则运算
### 词法分析
- tokenNumber: . 1 2 3 4 5 6 7 8 9 0 的组合
- Operator: + 、 - 、 * 、 / 之一
- Whitespace: <SP>
- LineTerminator: <LF><CR>
### 语法分析
<Expression>::=
   <AdditiveExpression><EOF>

<AdditiveExpression>::=
  <MultilicativeExpression>
  |<AdditiveExpression><+><MultilicativeExpression>
  |<AdditiveExpression><-><MultilicativeExpression>


<MultilicativeExpression>::=
  <Number>
  |<MultilicativeExpression><*><Number>
  |<MultilicativeExpression></><Number>

## 词法分析代码和语法分析代码