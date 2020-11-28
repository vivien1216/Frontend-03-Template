/*
 * @Author: vivien
 * @Date: 2020-10-18 22:43:41
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-25 23:05:11
 */
import { Component, createElement } from './framework.js';
 import { Carousel } from './carousel.js';
 import { Button } from './Button.js';
 import { List } from './List.js';
//  import { Timeline,  Animation } from './animation.js';


let d = [
   {
      img: ' https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
      url: 'https://element.eleme.cn/#/zh-CN',
      title: '蓝猫'
   },
   {
      img: ' https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
      url: 'https://element.eleme.cn/#/zh-CN',
      title: '橘猫'
   },
   {
      img:  ' https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
      url: 'https://element.eleme.cn/#/zh-CN',
      title: '橘猫加白'
   },
   {
      img:  ' https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
      url: 'https://element.eleme.cn/#/zh-CN',
      title: '橘猫'
   },
]

// let a = <Carousel src={d} onChange={event => console.log(event.detail.position)} onClick={event => window.location.href = event.detail.data.url}/>

// // document.body.appendChild(a);
// a.mountTo(document.body);

// let tl = new Timeline();
// tl.add(new Animation({ set a(v) {console.log(v)}}, 'a', 0, 100, 1000, null))
// tl.start();


let a = <List data={d}>
       {
          (record) => 
             <div>
                <img src={record.img} />
                <a src={record.url}>{record.title}</a>
             </div>
      }
      </List>

a.mountTo(document.body);